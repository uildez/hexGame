import { render } from "@testing-library/react";
import App from "../App";
import { Sidebar } from "../components/Sidebar";

describe("Testing", () => {
  const { getByText } = render(<Sidebar />);

  expect(getByText("Guessed color")).toBeTruthy();
});
