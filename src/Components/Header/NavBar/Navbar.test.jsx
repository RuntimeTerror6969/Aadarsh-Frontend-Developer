import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar", () => {
  test("renders navbar elements", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByText("SWIGGY")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for restaurant and food/i)
    ).toBeInTheDocument();
  });
});
