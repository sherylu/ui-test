import React from "react";
import VoteLayout from "../../VoteLayout/VoteLayout";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { LayoutProps } from "@/app/types/SharedProps";

const ListLayout: React.FC<LayoutProps> = ({
  imageUrl,
  iconColorClass,
  iconAriaLabel,
  name,
  description,
  alreadyVoted,
  formattedDate,
  setAlreadyVoted,
  voteRuling,
  votes,
  rulingId,
  Icon,
}) => {
  return (
    <div
      className="card-container"
      style={{
        backgroundImage: imageUrl,
      }}
    >
      <div className="card-filler">
        <div className="card-row">
          <div className={`card-side-thumb thumbs ${iconColorClass}`}>
            <Icon ariaLabel={iconAriaLabel} />
          </div>
          <div className="card-content">
            <div className="card-info">
              <p className="card-name">{name}</p>
              <p className="card-description">{description}</p>
            </div>
            <div className="card-actions">
              <p className="card-duration">
                {alreadyVoted ? "Thank you for your vote!" : formattedDate}
              </p>
              <div className="vote-container">
                <VoteLayout
                  name={name}
                  alreadyVoted={alreadyVoted}
                  setAlreadyVoted={setAlreadyVoted}
                  voteRuling={voteRuling}
                  rulingId={rulingId}
                />
              </div>
            </div>
          </div>
        </div>
        <ProgressBar votes={votes} />
      </div>
    </div>
  );
};

export default ListLayout;
