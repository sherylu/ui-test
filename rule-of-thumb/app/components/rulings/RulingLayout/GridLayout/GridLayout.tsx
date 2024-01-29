import React from "react";
import VoteLayout from "../../VoteLayout/VoteLayout";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { LayoutProps } from "@/app/types/SharedProps";

const GridLayout: React.FC<LayoutProps> = ({
  imageUrl,
  iconColorClass,
  iconAriaLabel,
  name,
  rulingId,
  description,
  alreadyVoted,
  formattedDate,
  setAlreadyVoted,
  voteRuling,
  votes,
  Icon,
}) => {
  return (
    <div
      className="grid-card"
      style={{
        backgroundImage: imageUrl,
      }}
    >
      <div className="grid-card-image">
        <div className="grid-card-content">
          <div className="grid-card-title">
            <div className={`grid-card-icon grid-thumbs ${iconColorClass}`}>
              <Icon ariaLabel={iconAriaLabel} size={16} />
            </div>
            <div className="grid-card-name">{name}</div>
          </div>
          <div className="grid-card-text">
            <p className="grid-card-description">{description}</p>
          </div>
          <p className="grid-card-duration">
            {alreadyVoted ? "Thank you for your vote!" : formattedDate}
          </p>
          <div className="grid-card-buttons">
            <VoteLayout
              name={name}
              alreadyVoted={alreadyVoted}
              setAlreadyVoted={setAlreadyVoted}
              voteRuling={voteRuling}
              classPrefix="grid-"
              rulingId={rulingId}
            />
          </div>
          <ProgressBar votes={votes} classprefix="grid-" />
        </div>
      </div>
    </div>
  );
};

export default GridLayout;
