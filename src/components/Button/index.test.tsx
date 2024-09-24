import "@testing-library/jest-dom";
import { getByText, render } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  it("should render the component", () => {
    const { container } = render(<Button>This is a button</Button>);

    const buttonText = getByText(container, "This is a button");

    expect(buttonText).toBeInTheDocument();
  });
});
