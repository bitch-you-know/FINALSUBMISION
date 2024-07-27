import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ListTrans from "./ListTrans";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "../store/store";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

describe("ListTrans", () => {
    it("shoud render component", () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <ListTrans />
                </BrowserRouter>
            </Provider>
        );

        expect(container).toBeDefined();
    });
});