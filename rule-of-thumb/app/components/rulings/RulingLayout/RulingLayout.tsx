import { useState } from "react";
import { getTimeAgo } from "../../../../utils/date";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import { Ruling } from "@/app/types/Rulings";
import GridLayout from "./GridLayout/GridLayout";
import ListLayout from "./ListLayout/ListLayout";
import { ScreenSizes, VoteFunction } from "@/app/types/SharedProps";

type Props = {
  ruling: Ruling;
  voteRuling: VoteFunction;
  selectedViewType: string;
  screenSize: ScreenSizes;
};

export const RulingLayout: React.FC<Props> = ({
  ruling,
  voteRuling,
  selectedViewType,
  screenSize,
}): JSX.Element => {
  const [alreadyVoted, setAlreadyVoted] = useState<boolean>(false);

  const formattedDate = getTimeAgo(ruling.lastUpdated);

  const isPositive = ruling.votes.positive > ruling.votes.negative;
  const Icon = isPositive ? ThumbsUpIcon : ThumbsDownIcon;
  const iconColorClass = isPositive ? "thumbs-up" : "thumbs-down";
  const iconAriaLabel = isPositive
    ? "positive voting result"
    : "negative voting result";

  const imageUrl = `url(/img/${ruling.picture})`;

  if (screenSize === "sm")
    return (
      <div className="carousel-item">
        {
          <GridLayout
            imageUrl={imageUrl}
            iconColorClass={iconColorClass}
            iconAriaLabel={iconAriaLabel}
            name={ruling.name}
            rulingId={ruling.id}
            description={ruling.description}
            alreadyVoted={alreadyVoted}
            formattedDate={formattedDate}
            setAlreadyVoted={setAlreadyVoted}
            voteRuling={voteRuling}
            votes={ruling.votes}
            Icon={Icon}
          />
        }
      </div>
    );

  return selectedViewType === "Grid" ? (
    <GridLayout
      imageUrl={imageUrl}
      iconColorClass={iconColorClass}
      iconAriaLabel={iconAriaLabel}
      name={ruling.name}
      rulingId={ruling.id}
      description={ruling.description}
      alreadyVoted={alreadyVoted}
      formattedDate={formattedDate}
      setAlreadyVoted={setAlreadyVoted}
      voteRuling={voteRuling}
      votes={ruling.votes}
      Icon={Icon}
    />
  ) : (
    <ListLayout
      imageUrl={imageUrl}
      iconColorClass={iconColorClass}
      iconAriaLabel={iconAriaLabel}
      name={ruling.name}
      rulingId={ruling.id}
      description={ruling.description}
      alreadyVoted={alreadyVoted}
      formattedDate={formattedDate}
      setAlreadyVoted={setAlreadyVoted}
      voteRuling={voteRuling}
      votes={ruling.votes}
      Icon={Icon}
    />
  );
};
