import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ListTrans from "../pages/ListTrans";
import ListProduct from "../pages/ListProduct";

describe("ListTrans",()=>{
    it("shoud render component",()=>{
        const renderedFooter = render(<ListProduct/>)

        expect (renderedFooter).not.toBeDefined();
    })
})