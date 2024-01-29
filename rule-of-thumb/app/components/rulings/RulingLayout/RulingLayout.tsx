import { useState } from "react";
import { getTimeAgo } from "../../../../utils/date";
import ThumbsDownIcon from "../../icons/ThumbsDownIcon";
import ThumbsUpIcon from "../../icons/ThumbsUpIcon";
import { Ruling } from "../Rulings";
import GridLayout from "./GridLayout/GridLayout";
import ListLayout from "./ListLayout/ListLayout";

type Props = {
  ruling: Ruling;
  voteRuling: (name: string, vote: "up" | "down") => Promise<any>;
  selectedViewType: string;
};

export const RulingLayout: React.FC<Props> = ({
  ruling,
  voteRuling,
  selectedViewType,
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
