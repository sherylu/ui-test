import { render, screen } from "@testing-library/react";
import { RulingLayout } from "./RulingLayout";

describe("RulingLayout", () => {
    const mockRuling = {
        name: "Test Ruling",
        description: "This is a test ruling",
        category: "Test Category",
        picture: "test.jpg",
        lastUpdated: "2022-01-01",
        votes: {
            positive: 10,
            negative: 5,
        },
    };

    it("renders the ruling name and description", () => {
        render(<RulingLayout ruling={mockRuling} />);
        const rulingName = screen.getByText("Test Ruling");
        const rulingDescription = screen.getByText("This is a test ruling");

        expect(rulingName).toBeInTheDocument();
        expect(rulingDescription).toBeInTheDocument();
    });

    it("renders the correct vote icon based on votes count", () => {
        render(<RulingLayout ruling={mockRuling} />);
        const thumbsUpIcon = screen.getByRole("img", { name: "positive voting result" });
        const thumbsDownIcon = screen.queryByRole("img", { name: "negative voting result" });

        expect(thumbsUpIcon).toBeInTheDocument();
        expect(thumbsDownIcon).not.toBeInTheDocument();
    });

});
