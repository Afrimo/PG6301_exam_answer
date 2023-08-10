import * as React from "react";
import {createRoot} from "react-dom/client";
import {TaskList} from "../taskList.jsx";
import {act} from "react-dom/test-utils";

describe('client test suite',  () => {

    it('HomePage gets rendered',  () => {

        // Test code goes here
        const element = document.createElement("div");
        const root = createRoot(element)

        act( () => {
            root.render(<TaskList />)
        })

        expect(element.querySelector("h1")?.innerHTML).toEqual("Page is currently loading....")
    });
});