import { render, screen } from "@testing-library/react";
import MainDetails from "./MainDetails";
import store from "../../stores/principal-store";
import { requestToken } from "../../actions/actions";
import * as actions from "../../actions/actions";

describe("main details", () => {
  beforeEach(() => {
    render(<MainDetails match={{ params: { animalId: "15" } }} />);
  });
  test("should render", () => {
    const linkElement = screen.getByText(/chevron_right/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("should test handlechanger", () => {
    store.setAnimal({
      description: "test",
      breeds: { primary: "" },
      tags: ["1", "2"],
      photos: ["1", "2"],
    });
    store.emitChange();
  });
  test("should request token", () => {
    actions.requestToken = jest.fn();
    store.setToken();
    store.emitChange();
    expect(requestToken).toHaveBeenCalled();
  });
});
