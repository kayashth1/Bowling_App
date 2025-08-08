import { describe } from "vitest";
import MarqueeComponent from "../MarqueeComponent";
import { render, screen } from "@testing-library/react";

describe("MarqueeComponent", () => {
    it("renders moving strips", () => {
        render(<MarqueeComponent />);
        expect(screen.getByText("WE ARE OPEN EARLY FOR VICTORIA DAY.")).toBeInTheDocument()
    })
});