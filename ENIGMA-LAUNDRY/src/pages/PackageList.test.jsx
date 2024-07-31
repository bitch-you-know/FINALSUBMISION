import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackageList from "./PackageList"
import { reducers } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

const store =createStore(reducers)

describe("packageList",()=>{
    it("should render packageList page",()=>{
        const {container}= render(
            <Provider store={store}>
                <BrowserRouter>
                <PackageList/>
                </BrowserRouter>
            </Provider>

        )
    
        expect(container).toBeDefined();
    })
})