import { render, fireEvent } from "@testing-library/react";
import Calculator from "../container/Calculator";

test("Check number of display components", async () => {
  const { container } = render(<Calculator />);
  const display = container.getElementsByClassName("display");

  expect(display).toHaveLength(3);
});

test("Check number of button components", async () => {
  const { container } = render(<Calculator />);
  const button = container.getElementsByClassName("button-wrapper");

  expect(button).toHaveLength(20);
});

test("Check C button click", async () => {
  const { container, getByText } = render(<Calculator />);
  const display = container.getElementsByClassName("display");
  const cButton = getByText("C");
  const digitButton = getByText(9);
  fireEvent.click(digitButton);
  fireEvent.click(cButton);

  expect(display[0]).toHaveTextContent("");
});

test("Check equals button click", async () => {
  const { container, getByText } = render(<Calculator />);
  const display = container.getElementsByClassName("display");
  const equalsButton = getByText("=");
  const digitButton5 = getByText(5);
  const digitButton8 = getByText(8);
  const operator = getByText("+");
  fireEvent.click(digitButton5);
  fireEvent.click(operator);
  fireEvent.click(digitButton8);
  fireEvent.click(equalsButton);

  expect(display[0]).toHaveTextContent("13");
});
