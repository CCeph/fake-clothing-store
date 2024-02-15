import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

it("renders card properly", () => {
  const image = "fakeurl";
  const price = 0;
  const name = "name";
  const type = "typeName";
  const { container } = render(
    <MemoryRouter>
      <Card image={image} price={price} name={name} type={type} />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
