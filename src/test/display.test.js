import { render } from "@testing-library/react";
import Display from "../components/display";

test("Check display text", async () => {
  const { getByText } = render(<Display result={12} />);

  const display = getByText(12);

  expect(display).toBeTruthy();
});
