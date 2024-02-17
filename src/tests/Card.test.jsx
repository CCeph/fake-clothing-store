import { render } from "@testing-library/react";
import Card from "../Components/Card";
import { expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

it("renders card properly", () => {
  const price = 0;
  const name = "name";
  const { container } = render(
    <MemoryRouter>
      <Card
        image={"https://i.imgur.com/cBuLvBi.jpeg"}
        price={price}
        name={name}
      />
    </MemoryRouter>,
  );
  expect(container).toMatchSnapshot();
});
