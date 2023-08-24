// Enzyme: Provides a set of testing utilities for React components, making it easier to test their behavior, state, and outputs.
// Enzyme Adapter: Acts as a bridge between Enzyme and a specific version of React, ensuring compatibility and consistent behavior across different React versions.
import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
