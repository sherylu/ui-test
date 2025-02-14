import React from "react";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";

type ProgressBarProps = {
  votes: {
    positive: number;
    negative: number;
  };
  classprefix?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ votes, classprefix="" }) => {
  const { positive, negative } = votes;
  const totalVotes = positive + negative;
  const positivePercentage = totalVotes === 0 ? 0 : (positive / totalVotes) * 100;
  const negativePercentage = totalVotes === 0 ? 0 : (negative / totalVotes) * 100;
  const iconSize = classprefix ? 15 : 25;
  
  return (
    <div className={`${classprefix}progress-bar`}>
      <div className="progress" style={{ width: `${positivePercentage}%` }}>
        <div className="progress-bar-start">
          <span className="progress-icon">
            <ThumbsUpIcon ariaLabel="positive progress thumbs up" size={iconSize} />
          </span>
          <span className="progress-number">
            {positivePercentage.toFixed(2)}%
          </span>
        </div>
      </div>
      <div
        className="progress-negative"
        style={{ width: `${negativePercentage}%` }}
      >
        <div className="progress-bar-end">
          <span className="progress-number">
            {negativePercentage.toFixed(2)}%
          </span>
          <span className="progress-icon">
            <ThumbsDownIcon ariaLabel="negative progress thumbs down" size={iconSize} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
