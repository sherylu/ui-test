import React, { useState } from "react";

type Props = {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};

const Dropdown: React.FC<Props> = ({ selectedValue, setSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-text">{selectedValue}</div>
        <div className="dropdown-arrow">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="dropdown-body">
          <div className="dropdown-item" onClick={() => handleSelect("List")}>
            List
          </div>
          <div className="dropdown-item" onClick={() => handleSelect("Grid")}>
            Grid
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
