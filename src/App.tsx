import Daily from "./Home/Daily";
import MenuBar from "./Components/MenuBar";

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

const handleSelectItem = (component:string) => {
  console.log(component);
}

function App() {
  return (
    <div>
      <Daily/>
      <MenuBar components={components} onSelectItem={handleSelectItem}/>
    </div>
    
  );
}
export default App;
