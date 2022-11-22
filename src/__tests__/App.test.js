import React from "react";
import { Game } from "../components/Game";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Game Component", () => {
  it("should start the game", () => {
    const { container, findByText, getByRole, getByLabelText, debug } = render(
      <Game />
    );

    const buttonStart = findByText("Start");
    userEvent.click(buttonStart);

    debug();
    expect(container).toHaveClass("bar");
  });

  it("should render an random color when game started", () => {});
});
