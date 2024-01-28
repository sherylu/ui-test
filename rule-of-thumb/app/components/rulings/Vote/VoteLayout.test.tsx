import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import VoteLayout from "./VoteLayout";

describe("VoteLayout", () => {
    it("should render the VoteLayout component", () => {
        render(<VoteLayout alreadyVoted={false} setAlreadyVoted={() => {}} />);
        
        // Assert that the VoteLayout component is rendered
        expect(screen.getByRole("button", {name:"Vote now"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name:"vote thumbs down"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name:"vote thumbs up"})).toBeInTheDocument();
    });

    it("should handle vote up", async () => {
        const setAlreadyVoted = jest.fn();
        render(<VoteLayout alreadyVoted={false} setAlreadyVoted={setAlreadyVoted} />);
        const thumbsUpButton = screen.getByRole("button", {name:"vote thumbs up"});
        const voteNowButton = screen.getByRole("button", {name:"Vote now"});

        await userEvent.click(thumbsUpButton);
        await userEvent.click(voteNowButton);

        expect(setAlreadyVoted).toHaveBeenCalledWith(true);
        //missing assertion for endoint call
    });

    it("should handle vote down", async () => {
        const setAlreadyVoted = jest.fn();
        render(<VoteLayout alreadyVoted={false} setAlreadyVoted={setAlreadyVoted} />);
        const thumbsDownButton = screen.getByRole("button", {name:"vote thumbs down"});
        const voteNowButton = screen.getByRole("button", {name:"Vote now"});

        await userEvent.click(thumbsDownButton);
        await userEvent.click(voteNowButton);

        expect(setAlreadyVoted).toHaveBeenCalledWith(true);
        //missing assertion for endoint call
    });

    it("should handle voting again", async() => {
        const setAlreadyVoted = jest.fn();
        render(<VoteLayout alreadyVoted={true} setAlreadyVoted={setAlreadyVoted} />);
        const voteAgainButton = screen.getByRole("button", {name:"Vote again"});

        expect(screen.queryByRole("button", {name:"Vote now"})).not.toBeInTheDocument();
        expect(screen.queryByRole("button", {name:"vote thumbs down"})).not.toBeInTheDocument();
        expect(screen.queryByRole("button", {name:"vote thumbs up"})).not.toBeInTheDocument();

        await userEvent.click(voteAgainButton);

        expect(setAlreadyVoted).toHaveBeenCalledWith(false);
        waitFor(() => {
        expect(screen.getByRole("button", {name:"Vote now"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name:"vote thumbs down"})).toBeInTheDocument();
        expect(screen.getByRole("button", {name:"vote thumbs up"})).toBeInTheDocument();
        });
    });
});
