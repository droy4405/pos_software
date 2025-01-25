'use client'
import { useState } from "react";

interface Props{
  components: string[];
  onSelectItem: (component: string) => void;
}

function MenuBar({components, onSelectItem}: Props) {
  
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <ul className="list-group">
        {components.map((component, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={component}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(component);
            }}
          >
            {component}
          </li>
        ))}
      </ul>
    </>
  );
}
export default MenuBar;
