import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TodoUserListPage from "../components/pages/TodoUserListPage";

describe("TodoUserListPage", () => {
  //todo list 추가
  test("add todo", () => {
    render(<TodoUserListPage />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "새로 추가" } });

    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    expect(screen.getByText("새로 추가")).toBeInTheDocument();
  });

  //todo list 삭제
  test("delete todo", () => {
    render(<TodoUserListPage />);

    const deleteButton = screen.getAllByAltText("삭제버튼")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("출근하고 비타민 먹기")).not.toBeInTheDocument();
  });

  test("toggle todo", () => {
    render(<TodoUserListPage />);

    const toggleButton = screen.getByTestId("toggle 1");

    expect(toggleButton).not.toHaveClass("bg-[#2182F3]");
    expect(toggleButton).not.toContainElement(screen.queryByAltText("체크"));

    fireEvent.click(toggleButton);

    expect(toggleButton).toHaveClass("bg-[#2182F3]");
    expect(toggleButton).toContainElement(screen.queryByAltText("체크"));
  });

  test("if empty todo, need text", () => {
    render(<TodoUserListPage />);

    const deleteButtons = screen.getAllByAltText("삭제버튼");

    deleteButtons.map((button) => fireEvent.click(button));

    expect(screen.getByText("아무것도 없네요 😅")).toBeInTheDocument();
  });
});
