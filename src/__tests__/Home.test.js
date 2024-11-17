import { render, screen } from "@testing-library/react";
import Home from "../components/Home"; // Adjust path as necessary

test('uses the "name" and "city" props to display the correct text', () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);

  const liza = screen.queryByText(/Liza is a Web Developer from New York/i);
  expect(liza).toBeInTheDocument(); // Assert that the text is present in the document
});

test('uses the "color" prop to set the inline style color of the h1', () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);

  const h1 = screen.getByText(/Liza is a Web Developer from New York/i);
  expect(h1).toHaveStyle("color: firebrick"); // Assert that the color style is applied
});
