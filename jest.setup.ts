import "@testing-library/jest-dom";

// JSDOM does not implement scrollIntoView — stub it in browser-like environments only
if (typeof window !== "undefined") {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
}
