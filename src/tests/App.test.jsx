import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

it("does not initially show cart", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  expect(screen.getByRole("complementary")).not.toBeVisible();
});

it("shows cart when cart button is clicked", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const cartButton = screen.getByRole("button", { name: /cart/i });

  await user.click(cartButton);

  expect(screen.getByRole("complementary")).toBeVisible();
});
