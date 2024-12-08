import "@testing-library/jest-dom";
import Page from ".";
import { render } from "@testing-library/react";

describe("Page", () => {
  it("renders title and children,", () => {
    const title = "Test Title";
    const children = "Test children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
