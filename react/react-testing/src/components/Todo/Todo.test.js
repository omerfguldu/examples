import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Testleri", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayilan olarak verilen 3 eleman render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });

  test("Input ve buton dokumanda bulunmali", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("Inputa string girilip butona basilinca listeye eklenmeli", () => {
    // Inputu doldur
    const name = "Omer";
    userEvent.type(input, name);

    // Butona tikla
    userEvent.click(button);

    // assertion
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
