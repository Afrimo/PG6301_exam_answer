import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {fetchJSON} from "./fetchJSON.jsx";
import * as React from "react";

export function LoggingFunction(){
    const [description, setDescription] = useState("")
    const [hours, setHours] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        await fetchJSON("/api/movies", {
            method: "post",
            json: { description, hours }
        })

        setDescription("")
        setHours("")
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to={"/"}>Home</Link>
            <h1>Submit a new movie</h1>
            <div>
                Title:
                <input/>
            </div>
            <div>
                Year:
                <input/>
            </div>
            <div>
                Plot:
                <textarea/>
            </div>
            <button>Submit</button>
            <div>
                <Link to={"/tasks/list"}>All tasks</Link>
            </div>
        </form>
    )
}