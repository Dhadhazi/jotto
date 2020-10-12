import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";

import hookActions from "./actions/hookActions";

const mockGetSecretWord = jest.fn();

const setup = (props = {}) => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
};

test("App renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

describe("getSecretWord calls", () => {
  test("getSecretWord gets called on App mount", () => {
    setup();
    expect(mockGetSecretWord).toHaveBeenCalled();
  });
});
