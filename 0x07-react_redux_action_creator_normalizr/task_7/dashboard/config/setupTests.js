import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { StyleSheetTestUtils } from 'aphrodite';
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

configure({ adapter: new Adapter() });

// Mock Aphrodite styles
StyleSheetTestUtils.suppressStyleInjection();

// Suppress Aphrodite styles before tests
beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  
  // Clear and resume Aphrodite styles after tests
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  