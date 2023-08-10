import * as React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";

import {useLoader} from "./useLoader.jsx";
import {fetchJSON} from "./fetchJSON.jsx";

export function LoggingFunction(){
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
            <Link to={"/"}>Back</Link>
            <h1>Log your hours on each task</h1>
            {data.map((task, index) => (
                <div key={task.description}>
                    <ul>
                        <div>
                            <div>
                                <span>{task.description}. [Hours used on this task: {task.hours}]</span>
                            </div>
                            <div>
                                <input
                                    type="number"
                                    value={additionalHoursMap[index] || ""}
                                    onChange={(event) => handleAdditionalHoursChange(index, event)}
                                    placeholder="Log hours"
                                />
                                <button onClick={() => addHoursToTask(index)}>Add Hours</button>
                            </div>
                        </div>
                    </ul>
                </div>
            ))}
            <p>Total Hours: {totalHours}</p>
            <Link to={"/tasks/list"}>All tasks</Link>
        </div>
    )
}