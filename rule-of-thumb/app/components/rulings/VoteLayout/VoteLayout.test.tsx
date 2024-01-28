import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VoteLayout from "./VoteLayout";

const mockVoteRuling = jest.fn(() => Promise.resolve({ data: {} }));

describe("VoteLayout", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render the VoteLayout component", () => {
    render(
      <VoteLayout
        name="example"
        alreadyVoted={false}
        setAlreadyVoted={() => {}}
        voteRuling={mockVoteRuling}
      />
    );

    // Assert that the VoteLayout component is rendered
    expect(
      screen.getByRole("button", { name: "Vote now" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "vote thumbs down" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "vote thumbs up" })
    ).toBeInTheDocument();
  });

  it("should handle vote up", async () => {
    const setAlreadyVoted = jest.fn();
    render(
      <VoteLayout
        name="example"
        alreadyVoted={false}
        setAlreadyVoted={setAlreadyVoted}
        voteRuling={mockVoteRuling}
      />
    );
    const thumbsUpButton = screen.getByRole("button", {
      name: "vote thumbs up",
    });
    const voteNowButton = screen.getByRole("button", { name: "Vote now" });

    await userEvent.click(thumbsUpButton);
    await userEvent.click(voteNowButton);

    expect(setAlreadyVoted).toHaveBeenCalledWith(true);
    expect(mockVoteRuling).toHaveBeenCalledWith("example", "up");
  });

  it("should handle vote down", async () => {
    const setAlreadyVoted = jest.fn();
    render(
      <VoteLayout
        name="example"
        alreadyVoted={false}
        setAlreadyVoted={setAlreadyVoted}
        voteRuling={mockVoteRuling}
      />
    );
    const thumbsDownButton = screen.getByRole("button", {
      name: "vote thumbs down",
    });
    const voteNowButton = screen.getByRole("button", { name: "Vote now" });

    await userEvent.click(thumbsDownButton);
    await userEvent.click(voteNowButton);

    expect(setAlreadyVoted).toHaveBeenCalledWith(true);
    expect(mockVoteRuling).toHaveBeenCalledWith("example", "down");
  });

  it("should handle voting again", async () => {
    const setAlreadyVoted = jest.fn();
    render(
      <VoteLayout
        name="example"
        alreadyVoted={true}
        setAlreadyVoted={setAlreadyVoted}
        voteRuling={mockVoteRuling}
      />
    );
    const voteAgainButton = screen.getByRole("button", { name: "Vote again" });

    expect(
      screen.queryByRole("button", { name: "Vote now" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "vote thumbs down" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "vote thumbs up" })
    ).not.toBeInTheDocument();

    await userEvent.click(voteAgainButton);

    expect(setAlreadyVoted).toHaveBeenCalledWith(false);
    waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Vote now" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "vote thumbs down" })
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "vote thumbs up" })
      ).toBeInTheDocument();
    });
  });
});
