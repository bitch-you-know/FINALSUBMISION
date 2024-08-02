import { createStore } from "redux";
import { describe, expect, it, should } from "vitest";
import { reducers } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { fireEvent, render,screen } from "@testing-library/react";


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

     it("should handle username and password input",async ()=>{
        render(
            <Provider store={store}>
                <BrowserRouter>
                  <Login/>
                </BrowserRouter>
            </Provider>
        )
        fireEvent.change(screen.getByTestId("username-input"), {
            target: { value: "admin" },
        });
        fireEvent.change(screen.getByTestId("password-input"), {
            target: { value: "password" },
        });

        // Verify that the inputs have the correct values
        expect(screen.getByTestId("username-input").value).toBe("admin");
        expect(screen.getByTestId("password-input").value).toBe("password");
     })

})
