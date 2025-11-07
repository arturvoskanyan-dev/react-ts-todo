import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeEach, describe, expect, test } from "vitest";
import store from "../store/store";
import ListItem from "../components/ListItem/ListItem";

describe("Test ListItem Compoent", () => {
    beforeEach(() => {
        const todo = { userId: 1, id: 1, title: "todo 1", completed: false };

        render(
            <Provider store={store}>
                <ListItem id={todo.id} title={todo.title} completed={todo.completed} />
            </Provider>
        )
    })

    test("test ListItem render", () => {
        // checkbox
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        // expect(screen.queryByRole("checkbox", {checked: true})).toBeInTheDocument();
        expect(screen.queryByRole("checkbox", { checked: true }))

        // todo title
        expect(screen.getByText("todo 1")).toBeInTheDocument();

        // todo buttons
        expect(screen.queryByRole("button", {name: "change-edit-btn"})).toBeNull();
        expect(screen.queryByRole("button", {name: "edit-btn"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: "remove-btn"})).toBeInTheDocument();
    })
})