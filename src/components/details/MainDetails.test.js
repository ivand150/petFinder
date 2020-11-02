import { render, screen } from "@testing-library/react";
import MainDetails from "./MainDetails";
import store from "../../stores/principal-store";

describe("main details", () => {
  beforeEach(() => {
    render(<MainDetails match={{ params: { animalId: "15" } }} />);
  });
  test("should render", () => {
    const linkElement = screen.getByText(/chevron_right/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("should ", () => {
    store.emitChange();
    const linkElement = screen.getByText(/chevron_right/i);
    expect(linkElement).toBeInTheDocument();
  });
});
