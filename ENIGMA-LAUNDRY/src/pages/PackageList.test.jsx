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

    it("should display Edit product button modal", async () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <PackageList />
                </BrowserRouter>
            </Provider>
        );

        // Debugging to see what is rendered
        screen.debug();

        // Assuming the product list is populated
        const editButton = await waitFor(() => screen.getByTestId("edite-package-button"));
        fireEvent.click(editButton);

        const modal = await waitFor(() => screen.getByTestId("edite-modal-package"));
        expect(modal).toBeInTheDocument();
    });
});
