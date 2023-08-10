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

    // Testing code for logging hours throug inputs
    it("logs hours through input tags", () => {
        const tasks = [
            { description: "Task 1", hours: 5 },
            { description: "Task 2", hours: 8 },
        ];

        const element = document.createElement("div");
        const root = createRoot(element)
        const { getByPlaceholderText, getByText } = root.render(<TaskList data={tasks} />);

        const input = getByPlaceholderText("Log hours");
        fireEvent.change(input, { target: { value: "3" } });

        const addButton = getByText("Add Hours");
        fireEvent.click(addButton);

        const updatedTask = tasks[0];
        expect(updatedTask.hours).toBe(8);
    });

});