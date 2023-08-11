import * as React from "react";
import { createRoot } from "react-dom";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {TaskList} from "./taskList.jsx";
import {LoggingFunction} from "./loggingFunction.jsx";
import {HomePage} from "./homePage.jsx";;

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

const element = document.getElementById("app");
const root = createRoot(element);

root.render(<Application />)
