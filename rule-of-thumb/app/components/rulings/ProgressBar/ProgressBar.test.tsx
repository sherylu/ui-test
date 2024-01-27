import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
    it("renders correctly with positive and negative votes", () => {
        const votes = {
            positive: 75,
            negative: 25,
        };

        render(<ProgressBar votes={votes} />);

        expect(screen.getByText("75.00%")).toBeInTheDocument();
        expect(screen.getByText("25.00%")).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "positive progress thumbs up"})).toBeInTheDocument();
        expect(screen.getByRole("img", {name: "negative progress thumbs down"})).toBeInTheDocument();
    });

    it("renders correctly with zero votes", () => {
        const votes = {
            positive: 0,
            negative: 0,
        };

        render(<ProgressBar votes={votes} />);

        expect(screen.getAllByText("0.00%")).toHaveLength(2);
    });

    it("renders correctly with only positive votes", () => {
        const votes = {
            positive: 100,
            negative: 0,
        };

        render(<ProgressBar votes={votes} />);

        expect(screen.getByText("100.00%")).toBeInTheDocument();
        expect(screen.getByText("0.00%")).toBeInTheDocument();
    });

    it("renders correctly with only negative votes", () => {
        const votes = {
            positive: 0,
            negative: 100,
        };

        render(<ProgressBar votes={votes} />);

        expect(screen.getByText("0.00%")).toBeInTheDocument();
        expect(screen.getByText("100.00%")).toBeInTheDocument();
    });
});