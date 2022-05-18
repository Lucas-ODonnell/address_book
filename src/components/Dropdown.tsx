import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import { ItemInfo } from "../types/CustomTypes";

interface Props {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
}
const Dropdown: React.FC<Props> = ({ setSortBy }) => {
  const items = [
    {
      id: 1,
      value: "Name",
    },
    {
      id: 2,
      value: "Email",
    },
  ];
  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState<ItemInfo[]>([]);

  useEffect(() => {
    if (dropdownRef.current !== null) {
      if (open && dropdownContainerRef.current !== null) {
        dropdownContainerRef.current.style.height = `${
          dropdownRef.current.getBoundingClientRect().height
        }`;
      } else if (!open && dropdownContainerRef.current !== null) {
        dropdownContainerRef.current.style.height = "0px";
      }
    }
  }, [open]);

  const toggle = () => setOpen(!open);
  const handleClick = (item: ItemInfo) => {
    if (!selection.find((current) => current.id === item.id)) {
      setSelection([item]);
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  return (
    <div className="dropdown-wrapper">
      <div tabIndex={0} className="dropdown-header">
        <div className="dropdown-header">
          <button className="dropdown-toggle" onClick={() => toggle()}>
            Sort by{" "}
          </button>
        </div>
      </div>
      {open && (
        <div className="dropdown-container" ref={dropdownContainerRef}>
          <ul className="list" ref={dropdownRef}>
            {items.map((item) => (
              <li className="list-item" key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    handleClick(item);
                    setSortBy(item.value);
                  }}
                >
                  <span className="list-title">{item.value}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      )
    </div>
  );
};

export default Dropdown;
