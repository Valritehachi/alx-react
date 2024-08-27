import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("render without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
 
});
