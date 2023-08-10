import * as React from "react";
import { createRoot } from "react-dom";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {TaskList} from "./taskList.jsx";

const element = document.getElementById("app");
const root = createRoot(element);



function AddMovie(){
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [plot, setPlot] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        await fetchJSON("/api/movies", {
            method: "post",
            json: { title, year, plot }
        })

        setTitle("")
        setYear("")
        setPlot("")
        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Link to={"/"}>Back</Link>
            <h1>Submit a new movie</h1>
            <div>
                Title:
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                Year:
                <input value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div>
                Plot:
                <textarea value={plot} onChange={(e) => setPlot(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    )
}
function HomePage(){
    return(
        <div>
            <h1> Welcome back! </h1>
            <ul>
                <li>
                    <Link to={"/tasks/list"}> Active tasks </Link>
                </li>
                <li>
                    <Link to={"/tasks/new"}> Add new Movie </Link>
                </li>
            </ul>
        </div>
    )
}



function Tasks(){
    return(
        <Routes>
            <Route path={"/list"} element={<TaskList />} />
            <Route path={"/new"} element={<AddMovie />} />
        </Routes>
    );
}
function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/tasks/*"} element={<Tasks/>}/>
            </Routes>
        </BrowserRouter>
    )
};


root.render(<Application />)
