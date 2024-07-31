import { createStore } from "redux";
import { describe, expect, it, should } from "vitest";
import { reducers } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { render } from "@testing-library/react";


const store = createStore(reducers)

describe("Login",()=> {
    it("should render Login page",()=>{
        const {container} =render (
            <Provider store={store}>
                <BrowserRouter>
                    <Login />
                </BrowserRouter>
            </Provider>
        )

        expect(container).toBeDefined()
    })
})
