import * as React from "react";
import {Link} from "react-router-dom";

export function HomePage(){
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