import React from "react";
import { render } from "@testing-library/react";
import { ListItem } from "./index";

describe("ListItem", () => {
  it("should render agents", () => {
    const agent = {
      type: "agent",
      id: "1",
      createdAt: "2020-02-14T09:44:36.374Z",
      name: "Clifford Prosacco",
      shop: "Conroy, MacGyver and Kunde",
      phone: "242-187-5121 x89848",
    };
    const { container } = render(<ListItem item={agent} />);

    expect(container).toMatchSnapshot();
  });
  it("should render shops", () => {
    const shop = {
      type: "shop",
      id: "1",
      createdAt: "2020-02-14T03:42:30.055Z",
      name: "Kris LLC",
      address: "06832 Juliana Gateway",
    };
    const { container } = render(<ListItem item={shop} />);

    expect(container).toMatchSnapshot();
  });
  it("should render properties", () => {
    const property = {
      type: "property",
      id: "1",
      createdAt: "2020-02-13T22:02:40.647Z",
      name: "Ritchie, Little and Crooks",
      address: "98350 Herzog Burg",
    };
    const { container } = render(<ListItem item={property} />);

    expect(container).toMatchSnapshot();
  });
});
