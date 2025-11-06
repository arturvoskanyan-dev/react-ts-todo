import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "../components";
import { Provider } from "react-redux";
import store from "../store/store";
import {userEvent} from "@testing-library/user-event";

describe("Test Header Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
    })

    test("Test Header Component Render", () => {
        // render Todo List text
        expect(screen.getByText("ToDo List")).toBeInTheDocument();
        // render input
        expect(screen.getByPlaceholderText(/enter your todo .../i)).toBeInTheDocument();
        // render Add button
        expect(screen.getByText("Add")).toBeInTheDocument();
    })

    test("Test Header Input Typing Test", async () => {
        // get Input
        const input = screen.getByPlaceholderText<HTMLInputElement>(/enter your todo/i);

        // type event
        await userEvent.type(input, "New todo")
        expect(input.value).toBe("New todo")
    })

    test("Test Header Submit Button", async () => {
        // get Input and button
        const input = screen.getByPlaceholderText<HTMLInputElement>(/enter your todo/i);
        const addButton = screen.getByRole("button", {name: /add/i});

        expect(input).toBeInTheDocument();
        expect(addButton).toBeInTheDocument();

        // test add button
        expect(input.value).toBe("New todo")
        if(input) {
            await userEvent.click(addButton);
        }

        expect(input.value).toBe("")
    })
})