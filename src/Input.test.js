import React from "react";
import { Input } from "./Input";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";

const defaultProps = { secretWord: "party" };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

test("Input renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { secretWord: "true" };
  checkProps(Input, expectedProps);
});
