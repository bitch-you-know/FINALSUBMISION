import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TransactionHistory from "./TransactionHistory.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "../store/store.js";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducers);

describe("TransactionHistory", () => {
    it("shoud render component", () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <TransactionHistory />
                </BrowserRouter>
            </Provider>
        );

        expect(container).toBeDefined();
    });
});