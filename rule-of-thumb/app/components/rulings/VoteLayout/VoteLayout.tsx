import React, { useState } from "react";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";
import { VoteFunction, VoteType } from "@/app/types/SharedProps";

type Props = {
  name: string;
  alreadyVoted: boolean;
  setAlreadyVoted: (value: boolean) => void;
  voteRuling: VoteFunction;
  classPrefix?: string;
  rulingId: number;
};

const VoteLayout: React.FC<Props> = ({
  name,
  alreadyVoted,
  setAlreadyVoted,
  voteRuling,
  classPrefix="",
  rulingId,
}) => {
  const [vote, setVote] = useState<VoteType | null>(null);

  const iconSize = classPrefix ? 16 : 25;

  const handleVote = (value: VoteType) => {
    setVote(value);
  };

  const handleVoteNow = () => {
    setAlreadyVoted(!alreadyVoted);

    if (!vote) return;
    voteRuling(rulingId, vote)
      .then((response: any) => {
        console.log(response);
      })
      .catch((error: Error) => {
        console.log(error);
      });
    setVote(null);
  };

  return (
    <>
      {alreadyVoted ? (
        <></>
      ) : (
        <>
          <button
            className={`${classPrefix}thumbs thumbs-up ${vote === "up" ? "selected" : ""}`}
            onClick={() => handleVote("up")}
          >
            <ThumbsUpIcon ariaLabel="vote thumbs up" size={iconSize} />
          </button>
          <button
            className={`${classPrefix}thumbs thumbs-down ${
              vote === "down" ? "selected" : ""
            }`}
            onClick={() => handleVote("down")}
          >
            <ThumbsDownIcon ariaLabel="vote thumbs down" size={iconSize} />
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
