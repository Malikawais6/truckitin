import { render, fireEvent } from "@testing-library/react";
import Button from "../components/button";

test("Check button click", async () => {
  const handleClick = jest.fn();
  const { container } = render(<Button handleClick={handleClick} />);

  const button = container.getElementsByClassName("button-wrapper");
  fireEvent.click(button[0]);

  expect(handleClick).toHaveBeenCalled();
});

test("Check button text", async () => {
  const { getByText } = render(<Button>12</Button>);

  const button = getByText(12);
  expect(button).toBeTruthy();
});
