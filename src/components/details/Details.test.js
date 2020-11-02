import { render, screen } from "@testing-library/react";
import Details from "./Details";

test("renders learn react link", () => {
  render(
    <Details
      animal={{
        description: "test",
        breeds: { primary: "" },
        tags: ["1", "2"],
      }}
    />
  );
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
