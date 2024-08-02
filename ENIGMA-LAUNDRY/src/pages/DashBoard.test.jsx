import { createStore } from "redux";
import { describe, expect, it } from "vitest";
import { reducers } from "../store/store";
import { fireEvent, screen, getByTestId, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard";
import { Button } from "@nextui-org/react";

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
           //Buka modal add cusomer
    it("should open Modal when button is clicked", () => {
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <DashBoard />
                </BrowserRouter>
            </Provider>
        )
        const buttonAdd = screen.getByTestId("add-customer-button")
        fireEvent.click(buttonAdd)

        const modal = screen.getByTestId("customer-modal")

        expect(buttonAdd).toBeVisible()
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

