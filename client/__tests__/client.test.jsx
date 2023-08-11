import * as React from "react";
import { createRoot } from "react-dom/client";
import {act} from "react-dom/test-utils";

import {HomePage} from "../homePage.jsx";

describe('client test suite', () => {
    it('HomePage gets rendered', () => {
        const element = document.createElement("div")
        const root = createRoot(element)


        root.render(<HomePage />)

        expect(element.innerHTML).toMatchSnapshot();
    });
});