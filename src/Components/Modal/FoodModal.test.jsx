import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import FoodModal from "./FoodModal";

jest.mock("axios");

describe("FoodModal", () => {
  const mockMeal = {
    idMeal: "1",
    strMeal: "Test Dish",
    strMealThumb: "test.jpg",
    strCategory: "Vegetarian",
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { meals: [mockMeal] } });
  });

  test("renders modal with food details", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <FoodModal id="1" setFlag={jest.fn()} />
        </BrowserRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByText("Test Dish")).toBeInTheDocument();
      expect(screen.getByText("Veg")).toBeInTheDocument();
    });
  });

  test("closes modal on button click", async () => {
    const setFlag = jest.fn();

    await act(async () => {
      render(
        <BrowserRouter>
          <FoodModal id="1" setFlag={setFlag} />
        </BrowserRouter>
      );
    });

    await waitFor(() => {
      const closeButton = screen.getByText("ADD");
      fireEvent.click(closeButton);
    });

    expect(setFlag).toHaveBeenCalledWith(false);
  });
});
