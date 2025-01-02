import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "."; // Adjust the path to your Button component

describe("Button Component", () => {
  it("renders the button with default props", () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("h-9 px-4 py-2"); // Default size
    expect(button).toHaveClass("bg-primary text-primary-foreground"); // Default variant
  });

  it("renders with custom variant and size", () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    );
    const button = screen.getByRole("button", { name: /delete/i });
    expect(button).toHaveClass("bg-destructive text-destructive-foreground");
    expect(button).toHaveClass("h-10 rounded-md px-8");
  });

  it("applies custom class names", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("custom-class");
  });

  it("renders as disabled when the disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      "disabled:pointer-events-none disabled:opacity-50"
    );
  });

  it("triggers onClick when clicked", async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });

    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders children correctly", () => {
    render(<Button>Submit</Button>);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toHaveTextContent("Submit");
  });
});
