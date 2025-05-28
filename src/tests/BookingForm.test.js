import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form with submit button", () => {
  render(<BookingForm />);
  expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
});