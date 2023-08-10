import * as React from "react";
import { createRoot } from "react-dom";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {TaskList} from "./taskList.jsx";
import {LoggingFunction} from "./loggingFunction.jsx";

const element = document.getElementById("app");
const root = createRoot(element);


function HomePage(){
    return(
        <div>
            <h1> Welcome back! </h1>
            <ul>
                <li>
                    <Link to={"/tasks/list"}> All tasks </Link>
                </li>
                <li>
                    <Link to={"/tasks/new"}> Log hours </Link>
                </li>
            </ul>
        </div>
    )
}



function Tasks(){
    return(
        <Routes>
            <Route path={"/list"} element={<TaskList />} />
            <Route path={"/new"} element={<LoggingFunction />} />
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
