"use client";
import { useState } from "react";
import { RulingLayout } from "./RulingLayout/RulingLayout";
import Dropdown from "./Dropdown/Dropdown";

export type Ruling = {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  };
};

type Props = {
  rulings: Ruling[];
  voteRuling: (name: string, vote: "up" | "down") => Promise<any>;
};

const GridContainer: React.FC<{ children: React.ReactNode, selectedViewType: "List"| "Grid"}> = ({
  children,
  selectedViewType
}) => {
  return selectedViewType === "Grid" ? (
    <div className="grid-container">{children}</div>
  ) : (
    <>{children}</>
  );
};

const Rulings: React.FC<Props> = ({ rulings, voteRuling }) => {
  const [selectedViewType, setSelectedViewType] = useState<"List"| "Grid" >("List");

  return (
    <>
      <div className="rulings-header">
        <h3>Previous Rulings</h3>
        <Dropdown
          selectedValue={selectedViewType}
          setSelectedValue={setSelectedViewType}
        />
      </div>
      <div>
        <GridContainer selectedViewType={selectedViewType}>
          {rulings.map((ruling, index) => (
            <RulingLayout
              ruling={ruling}
              key={index}
              voteRuling={voteRuling}
              selectedViewType={selectedViewType}
            />
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default Rulings;
