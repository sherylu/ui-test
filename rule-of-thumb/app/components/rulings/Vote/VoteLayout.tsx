import React, { useState } from "react";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";

type Props = {
  alreadyVoted: boolean;
  setAlreadyVoted: (value: boolean) => void;
};

const VoteLayout: React.FC<Props> = ({ alreadyVoted, setAlreadyVoted }) => {
  const [vote, setVote] = useState<string | null>(null);

  const handleVote = (value: string) => {
    setVote(value);
  };

  const handleVoteNow = () => {
    // Send `vote` to the API for voting.
    // This is a placeholder and should be replaced with your actual API call.
    setAlreadyVoted(!alreadyVoted);
    console.log(`Sending vote: ${vote}`);
    setVote(null);
  };

  return (
    <>
      {alreadyVoted ? (
        <></>
      ) : (
        <>
          <button className="thumbs thumbs-up" onClick={() => handleVote("up")}>
            <ThumbsUpIcon ariaLabel="vote thumbs up" />
          </button>
          <button
            className="thumbs thumbs-down"
            onClick={() => handleVote("down")}
          >
            <ThumbsDownIcon ariaLabel="vote thumbs down" />
          </button>
        </>
      )}
      {alreadyVoted ? (
        <button
          className="cta-vote-button"
          onClick={() => setAlreadyVoted(!alreadyVoted)}
        >
          Vote again
        </button>
      ) : (
        <button
          className="cta-vote-button"
          onClick={handleVoteNow}
          disabled={!vote}
        >
          Vote now
        </button>
      )}
    </>
  );
};

export default VoteLayout;
