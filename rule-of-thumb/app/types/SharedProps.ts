export type VoteFunction = (id: number, vote: VoteType) => Promise<any>

export type LayoutProps = {
    imageUrl: string;
    iconColorClass: string;
    iconAriaLabel: string;
    name: string;
    description: string;
    rulingId: number;
    alreadyVoted: boolean;
    formattedDate: string;
    setAlreadyVoted: React.Dispatch<React.SetStateAction<boolean>>;
    voteRuling: VoteFunction;
    votes: {
      positive: number;
      negative: number;
    };
    Icon: React.FC<{ ariaLabel?: string; size?: number }>;
  }

  export type ScreenSizes = "lg" | "md" | "sm"

  export type VoteType = "up" | "down"