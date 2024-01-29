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
    voteRuling: (name: string, vote: "up" | "down") => Promise<any>;
    votes: {
      positive: number;
      negative: number;
    };
    Icon: React.FC<{ ariaLabel?: string; size?: number }>;
  }