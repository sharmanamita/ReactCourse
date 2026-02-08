import "./App.css";
import { PizzaTypes } from "./assets/data";
import { Footer, Header, Menu } from "./components";
import type { MenuItem } from "./components";

function App() {
  return (
    <div className="container">
      <Header name="FAST REACT PIZZA CO." />
      <Menu menus={PizzaTypes as MenuItem[]} />
      <Footer />
    </div>
  );
}

export default App;
