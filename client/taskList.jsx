import {Link} from "react-router-dom";
import * as React from "react";
import {useState} from "react";

import { useLoader } from "./useLoader.jsx";
import { fetchJSON } from "./fetchJSON.jsx";

export function TaskList() {
    const initialData = useLoader(async () => {
        return fetchJSON("/api/tasks");
    });

    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/tasks");
    });
    const [taskData, setTaskData] = useState(initialData);
    const [additionalHoursMap, setAdditionalHoursMap] = useState({});

    const handleAdditionalHoursChange = (taskIndex, event) => {
        setAdditionalHoursMap((prevMap) => ({
            ...prevMap,
            [taskIndex]: event.target.value
        }));
    };

    const addHoursToTask = (taskIndex) => {
        const inputValue = additionalHoursMap[taskIndex] || "";
        const totalHoursBefore = parseFloat(data[taskIndex].hours);

        if (inputValue !== "") {
            const newHours = totalHoursBefore + parseFloat(inputValue);

            if (newHours > 40) {
                alert("Total hours cannot exceed 40.");
                return;
            }

            const newData = [...data];
            newData[taskIndex].hours = newHours;
            setTaskData(newData);

            setAdditionalHoursMap((prevMap) => ({
                ...prevMap,
                [taskIndex]: ""
            }));
        }
    };

    if (loading){
        return <div>
            <h1>Page is currently loading....</h1>
        </div>
    }

    if (error){
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
            </div>
        )
    }

    const totalHours = data.reduce((total, task) => total + parseFloat(task.hours), 0);

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>Active tasks</h1>
            {data.map((task, index) => (
                <div key={task.description}>
                    <li>
                        <div className="task-container">
                            <span>{task.description}. [Hours used: {task.hours}]</span>
                            <input
                                type="number"
                                value={additionalHoursMap[index] || ""}
                                onChange={(event) => handleAdditionalHoursChange(index, event)}
                                placeholder="Additional Hours"
                            />
                            <button onClick={() => addHoursToTask(index)}>Add Hours</button>
                        </div>
                    </li>
                </div>
            ))}
            <p>Total Hours: {totalHours}</p>
            <Link to={"/tasks/new"}>Log hours</Link>
        </div>
    )
}