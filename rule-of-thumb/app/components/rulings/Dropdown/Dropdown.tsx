import React, { useState } from "react";

type Props = {
  selectedValue: string;
  setSelectedValue: (value: "List"| "Grid") => void;
};

const Dropdown: React.FC<Props> = ({ selectedValue, setSelectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: "List"| "Grid") => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" role="combobox" aria-expanded="false" aria-owns="dropdown-menu" aria-haspopup="listbox">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown-text">{selectedValue}</div>
        <div role="button" className="dropdown-arrow" aria-label={isOpen ? "close view options" : "open view options"}>{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="dropdown-body">
          <div role="option" className="dropdown-item" onClick={() => handleSelect("List")}>
            List
          </div>
          <div role="option" className="dropdown-item" onClick={() => handleSelect("Grid")}>
            Grid
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
