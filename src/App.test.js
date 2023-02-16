import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("app", () => {
  it("turns on", async () => {
    render(<App />);

    await userEvent.click(screen.getByText("Turn on"));

    await waitFor(async () => {
      screen.getByText("It is on");
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
  });
});
