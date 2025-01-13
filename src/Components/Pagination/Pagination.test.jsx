import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const mockProps = {
    totalPost: 16,
    currentPage: 1,
    mealPerPage: 8,
    setCurrentPage: jest.fn(),
  };

  test("renders correct number of pages", () => {
    render(<Pagination {...mockProps} />);
    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons).toHaveLength(2); // 16 posts / 8 per page = 2 pages
  });

  test("handles page navigation", () => {
    render(<Pagination {...mockProps} />);
    const nextPageButton = screen.getByText("2");
    fireEvent.click(nextPageButton);
    expect(mockProps.setCurrentPage).toHaveBeenCalledWith(2);
  });
});
