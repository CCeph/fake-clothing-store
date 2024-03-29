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
  expect(screen.getByTestId("cart")).not.toBeVisible();
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

  expect(screen.getByRole("complementary", { name: /cart/i })).toBeVisible();
});

it("hides cart when cart close button is clicked", async () => {
  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const cartButton = screen.getByRole("button", { name: /cart/i });
  await user.click(cartButton);

  const closeButton = screen.getByRole("button", { name: /close/i });
  await user.click(closeButton);

  expect(screen.getByTestId("cart")).not.toBeVisible();
});

it.skip("Add test for adding items to cart by mocking a card");
