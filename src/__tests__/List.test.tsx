import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { List } from "../components";
import { Provider } from "react-redux";
import store from "../store/store";

describe("Test List Component", () => {
    beforeEach(() => {
        const todos = [
            { userId: 1, id: 1, title: "todo 1", completed: false },
            { userId: 2, id: 2, title: "todo 2", completed: false }
        ]
        render(
            // <List todos={todos} />
            <Provider store={store}>
                <List todos={todos} />
            </Provider>
        )
    })

    test("test list item", () => {
        expect(screen.getByText("todo 1")).toBeInTheDocument();
        expect(screen.getByText("todo 2")).toBeInTheDocument();
    })

    test("test list items", () => {
        const items = screen.getAllByRole("listitem");
        expect(items.length).toBe(2);

        // expect(screen.queryAllByRole("listitem").length).toBe(0);
    })
})