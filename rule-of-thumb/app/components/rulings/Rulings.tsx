'use client'
import { RulingLayout } from "./RulingLayout/RulingLayout";

export type Ruling = {
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

const Rulings: React.FC<{rulings: Ruling[]}> = ({rulings}) => {

  return (
    <>
      <h3>Previous Rulings</h3>
      <select>
        <option value="List">List</option>
        <option value="Grid">Grid</option>
      </select>
      {rulings.map((ruling, index) => (<RulingLayout ruling={ruling} key={index} />))}
    </>
  );
};

export default Rulings;
