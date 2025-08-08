// src/context/__tests__/TestContext.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { TestContext, TestProvider } from "../TestContext";
import userEvent from "@testing-library/user-event";

function TestConsumer() {
  const { testOpen, toggleTest } = React.useContext(TestContext);
  return (
    <>
      <span data-testid="test-state">{testOpen ? "open" : "closed"}</span>
      <button onClick={toggleTest}>Toggle</button>
    </>
  );
}

describe("TestContext", () => {
  it("has default state as false", () => {
    render(
      <TestProvider>
        <TestConsumer />
      </TestProvider>
    );

    expect(screen.getByTestId("test-state")).toHaveTextContent("closed");
  });

  it("toggles state when toggleTest is called", async () => {
    const user = userEvent.setup();

    render(
      <TestProvider>
        <TestConsumer />
      </TestProvider>
    );

    const state = screen.getByTestId("test-state");
    const button = screen.getByRole("button", { name: /toggle/i });

    await user.click(button);
    expect(state).toHaveTextContent("open");

    await user.click(button);
    expect(state).toHaveTextContent("closed");
  });
});
