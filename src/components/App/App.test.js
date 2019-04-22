import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Calculator from "../Calculator/Calculator";

describe("App", () => {
  let wrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render the Calculator Component", () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
