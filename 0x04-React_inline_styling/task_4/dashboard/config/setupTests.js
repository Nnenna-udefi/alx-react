import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });

// Mock Aphrodite styles
StyleSheetTestUtils.suppressStyleInjection();


