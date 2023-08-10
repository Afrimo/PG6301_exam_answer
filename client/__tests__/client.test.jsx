import * as React from "react";
import {createRoot} from "react-dom/client";
import {act} from "react-dom/test-utils";

import {TaskList} from "../taskList.jsx";

describe('client test suite',  () => {

    it('TaskList gets rendered',  () => {
        const element = document.createElement("div");
        const root = createRoot(element)

        act( () => {
            root.render(<TaskList />)
        })

        expect(element.querySelector("h1")?.innerHTML).toEqual("Page is currently loading....")
    });


});