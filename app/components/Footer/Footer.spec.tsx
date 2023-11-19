import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it('should render the text "MKS sistemas © Todos os direitos reservados"', () => {
    render(<Footer />);

    expect(
      screen.getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeInTheDocument();
  });
});
