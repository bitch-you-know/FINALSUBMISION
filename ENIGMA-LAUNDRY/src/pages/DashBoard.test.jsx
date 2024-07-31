import { createStore } from "redux";
import { describe, expect, it } from "vitest";
import { reducers } from "../store/store";
import { fireEvent, screen, getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard";

const store = createStore(reducers)

describe("DashBoardPage", () => {
    it("should render DahBoard Page", () => {
        const { container } = render(
            <Provider store={store}>
                <BrowserRouter>
                    <DashBoard />
                </BrowserRouter>
            </Provider>
        )
        expect(container).toBeDefined()
    })

    it("should open Modal when button is clicked", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <DashBoard />
                </BrowserRouter>
            </Provider>
        )
        const button = screen.getByTestId("add-customer-button")
        fireEvent.click(button)

        const modal = screen.getByTestId("customer-modal")

        expect(button).toBeVisible()
    })

    it("should render ListCustomers Component", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <DashBoard />
                </BrowserRouter>
            </Provider>
        )
        expect(screen.getByTestId("customer-title")).toBeInTheDocument();

        const ListCustomers = screen.queryByTestId("list-customer")
        expect(ListCustomers).toBeInTheDocument()
    })

    

})

