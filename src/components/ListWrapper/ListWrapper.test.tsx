import React from "react";
import { render } from "@testing-library/react";
import { ListWrapper } from "./index";

describe("ListWrapper", () => {
  it("should render component", () => {
    const { container } = render(<ListWrapper />);

    expect(container).toMatchSnapshot();
  });
});
