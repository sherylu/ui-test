"use client";
import { useState } from "react";
import { RulingLayout } from "./RulingLayout/RulingLayout";
import Dropdown from "./Dropdown/Dropdown";
import useScreenSize from "@/app/hooks/useScreenSize";
import { Ruling } from "@/app/types/Rulings";
import { ScreenSizes, VoteFunction } from "@/app/types/SharedProps";

type Props = {
  rulings: Ruling[];
  voteRuling: VoteFunction;
};

const GridContainer: React.FC<{
  children: React.ReactNode;
  selectedViewType: "List" | "Grid";
  screenSize: ScreenSizes;
}> = ({ children, selectedViewType, screenSize }) => {
  if (screenSize === "sm") return <div className="carousel">{children}</div>;
  return selectedViewType === "Grid" ? (
    <div className="grid-container">{children}</div>
  ) : (
    <>{children}</>
  );
};

const Rulings: React.FC<Props> = ({ rulings, voteRuling }) => {
  const screenSize = useScreenSize();

  const [selectedViewType, setSelectedViewType] = useState<"List" | "Grid">(
    "List"
  );

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
        <GridContainer
          selectedViewType={selectedViewType}
          screenSize={screenSize}
        >
          {rulings.map((ruling, index) => (
            <RulingLayout
              ruling={ruling}
              key={index}
              voteRuling={voteRuling}
              selectedViewType={selectedViewType}
              screenSize={screenSize}
            />
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default Rulings;
