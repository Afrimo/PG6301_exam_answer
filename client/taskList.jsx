import {Link} from "react-router-dom";
import * as React from "react";

import { useLoader } from "./useLoader.jsx";
import { fetchJSON } from "./fetchJSON.jsx";

export function TaskList (){
    const { loading, error, data } = useLoader( async () => {
        return fetchJSON("/api/tasks")
    })

    if (loading){
        return <div>Still loading...</div>
    }

    if (error){
        return (
            <div>
                <h1>Error</h1>
                <div>{error.toString()}</div>
            </div>
        )
    }

    return (
        <div>
            <Link to={"/"}>Back</Link>
            <h1>Active tasks</h1>
            {
                data.map( (tasks) => (
                    <div key={tasks.description}>
                        <h2> {tasks.description} </h2>
                        <p>Hours used: {tasks.hours}</p>
                    </div>
                ))}
        </div>
    )
}