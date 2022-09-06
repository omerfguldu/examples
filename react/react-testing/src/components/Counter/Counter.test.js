import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, count, decreaseBtn;
  beforeEach(() => {
    console.log("before every test");
    render(<Counter />);
    count = screen.getByText("0");
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
  });

  afterEach(() => {
    console.log("after every test");
  });

  beforeAll(() => {
    console.log("only once at the start");
  });

  afterAll(() => {
    console.log("only once at the end");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
});
