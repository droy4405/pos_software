import { MouseEvent, useState } from "react";

function MenuBar() {
  const components = [
    "Home",
    "Sales",
    "Purchases",
    "Inventory",
    "Contacts",
    "Product Setting",
    "Report",
    "Setting",
  ];
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
