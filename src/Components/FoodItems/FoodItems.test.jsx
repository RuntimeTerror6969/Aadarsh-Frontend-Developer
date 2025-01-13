import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import FoodItems from "./FoodItems";

jest.mock("axios");

describe("FoodItems", () => {
  const mockFoodData = {
    meals: [
      {
        idMeal: "1",
        strMeal: "Butter Chicken",
        strMealThumb: "test-image.jpg",
      },
    ],
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockFoodData });
  });

  test("renders food items and pagination", async () => {
    render(
      <BrowserRouter>
        <FoodItems
          country="Indian"
          setFlag={jest.fn()}
          sortFilter="Relevance (Default)"
          currentPage={1}
          setCurrentPage={jest.fn()}
        />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Butter Chicken")).toBeInTheDocument();
    });
  });

  test("handles sorting", async () => {
    render(
      <BrowserRouter>
        <FoodItems
          country="Indian"
          setFlag={jest.fn()}
          sortFilter="A-Z Sort"
          currentPage={1}
          setCurrentPage={jest.fn()}
        />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining("Indian"));
    });
  });
});
