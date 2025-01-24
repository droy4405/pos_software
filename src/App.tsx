import Daily from "./Home/Daily";
import MenuBar from "./Components/MenuBar";
import "./app/globals.css";
import "./Home/monthly.tsx";
import link from "next/link";
const components = [
  "Home",
  "Sales",
  "Purchases",
  "Inventory",
  "Contacts",
  "ProDuct Setting",
  "Report",
  "Setting",
];

const handleSelectItem = (component: string) => {
  console.log(component);
};

function App() {
  return (
    <>
      <Daily />
      <MenuBar components={components} onSelectItem={handleSelectItem} />
      <div>
        <link href="./Home/monthly">
          <a>Monthly</a>
        </link>
      </div>
    </>
  );
}
export default App;
