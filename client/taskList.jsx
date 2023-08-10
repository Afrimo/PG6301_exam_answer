import {Link} from "react-router-dom";
import * as React from "react";

import { useLoader } from "./useLoader.jsx";
import { fetchJSON } from "./fetchJSON.jsx";

export function TaskList() {

    const initialData = useLoader(async () => {
        return fetchJSON("/api/tasks");
    });

    const { loading, error, data } = useLoader(async () => {
        return fetchJSON("/api/tasks");
    });

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
            <h1>List of all tasks</h1>
            {data.map((task) => (
                <div key={task.description}>
                    <ul>
                        <div>
                            <div>
                                <span>{task.description}. [Hours used: {task.hours}]</span>
                            </div>
                        </div>
                    </ul>
                </div>
            ))}
            <Link to={"/tasks/new"}>Log hours</Link>
        </div>
    )
}