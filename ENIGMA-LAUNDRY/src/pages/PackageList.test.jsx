import { render, screen, fireEvent, waitFor,de } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PackageList from "./PackageList";
import { reducers } from "../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";

const store = createStore(reducers);

describe("packageList", () => {
    it("should render packageList page", () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <PackageList />
                </BrowserRouter>
            </Provider>
        );

        expect(container).toBeDefined();
    });

    it("should display add product button modal", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PackageList />
                </BrowserRouter>
            </Provider>
        );

        const addButton = screen.getByTestId("add-package-button");
        fireEvent.click(addButton);

        const modal = screen.getByTestId("add-modal-package");
        expect(modal).toBeInTheDocument();
    });

    it("should display list product",()=>{
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PackageList />
                </BrowserRouter>
            </Provider>
        );

        const listPackage =screen.getByTestId("list-product")
        expect(listPackage).toBeInTheDocument();
    })

   
});
