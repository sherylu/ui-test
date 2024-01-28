import { useState } from "react";
import VoteLayout from "../Vote/VoteLayout";
import { getTimeAgo } from "../../../../utils/date";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import { Ruling } from "../Rulings";

type Props = {
  ruling: Ruling;
};

export const RulingLayout: React.FC<Props> = (props): JSX.Element => {
  const { ruling } = props;

  const [alreadyVoted, setAlreadyVoted] = useState<boolean>(false);

  const formattedDate = getTimeAgo(ruling.lastUpdated);

  const isPositive = ruling.votes.positive > ruling.votes.negative;
  const Icon = isPositive ? ThumbsUpIcon : ThumbsDownIcon;
  const iconColorClass = isPositive ? 'thumbs-up' : 'thumbs-down'; 
  const iconAriaLabel = isPositive ? 'positive voting result' : 'negative voting result'; 
  
  const imageUrl = `url(/img/${ruling.picture})`;
  return (
    <div className="card-container" style={{
        backgroundImage: imageUrl,
      }}>
      <div className="card-filler">
        <div className="card-row">
          <div className={`card-side-thumb thumbs ${iconColorClass}`}><Icon ariaLabel={iconAriaLabel}/></div>
          <div className="card-content">
            <div className="card-info">
              <p className="card-name">{ruling.name}</p>
              <p className="card-description">{ruling.description}</p>
            </div>
            <div className="card-actions">
              <p className="card-duration">{alreadyVoted ? 'Thank you for your vote!' : formattedDate }</p>
              <div className="vote-container">
                <VoteLayout
                  alreadyVoted={alreadyVoted}
                  setAlreadyVoted={setAlreadyVoted}
                />
              </div>
            </div>
          </div>
        </div>
        <ProgressBar votes={ruling.votes} />
      </div>
    </div>
  );
};
