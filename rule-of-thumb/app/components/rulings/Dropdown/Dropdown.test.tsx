import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Dropdown from "./Dropdown";
import userEvent from "@testing-library/user-event";

describe("Dropdown Component", () => {
  test("renders the dropdown with initial selected value", () => {
    const selectedValue = "List";
    const setSelectedValue = jest.fn();

    render(
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    );

    expect(screen.getByText(selectedValue)).toBeInTheDocument();
  });

  test("opens the dropdown when clicked on the header", async () => {
    const selectedValue = "List";
    const setSelectedValue = jest.fn();

    render(
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    );

    const dropdownHeader = screen.getByRole("button", {
      name: "open view options",
    });
    userEvent.click(dropdownHeader);

    waitFor(() => {
      expect(screen.getByText("List")).toBeInTheDocument();
      expect(screen.getByText("▲")).toBeInTheDocument();
    });
  });

  test("calls setSelectedValue and closes the dropdown when an item is selected", async () => {
    const selectedValue = "List";
    const setSelectedValue = jest.fn();

    render(
      <Dropdown
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
    );

    const dropdownHeader = screen.getByRole("button", {
      name: "open view options",
    });
    await userEvent.click(dropdownHeader);

    const dropdownItem = screen.getByRole("option", { name: "Grid" });
    await userEvent.click(dropdownItem);

    expect(setSelectedValue).toHaveBeenCalledWith("Grid");
  });
});
