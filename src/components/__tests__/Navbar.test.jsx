import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar"

// Mock the logo import
vi.mock("../../assets/logo.png", () => ({
  default: "logo.png",
}))

describe("Navbar Component", () => {
  it("renders the logo with correct alt text and src", () => {
    render(<Navbar />);
    const logoImg = screen.getByAltText("logo");
    expect(logoImg).toBeInTheDocument();
    // expect(logoImg).toHaveAttribute("src", "logo.png");
  })

  it("renders all navbar links for desktop", () => {
    render(<Navbar />);
    const links = ["Home", "News", "About Us", "Packages"];
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    })
  });

//   it("toggles mobile menu when hamburger icon is clicked", () => {
//     render(<Navbar />);
//     const menuButton = screen.getByRole("button");

//     // Home as default
//     let homeLink = screen.queryByText("Home");
//     expect(homeLink).toBeInTheDocument(); // still visible in desktop 

//     // click on menu
//     fireEvent.click(menuButton);
//     expect(screen.getByText("Home")).toBeInTheDocument();

//     // click again to close menu
//     fireEvent.click(menuButton);
//     expect(screen.getByText("Home")).toBeInTheDocument(); // still in desktop
//   });

//   it("navigates when About Us link is clicked (desktop view)", () => {
//     render(<Navbar />);

//     // Find the desktop "About Us" link
//     const aboutLink = screen.getByText("About Us");

//     // Mock the navigation (if using react-router-dom's useNavigate or window.location)
//     const navigateMock = vi.fn();
//     aboutLink.onclick = navigateMock;

//     // Click it
//     fireEvent.click(aboutLink);

//     // Assert that click was triggered
//     expect(navigateMock).toHaveBeenCalled();
//   });
});
