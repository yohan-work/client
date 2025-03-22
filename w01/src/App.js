import "./App.css";
import Join from "./components/week03/Join";
import Product from "./components/week03/Product";
import Fruits from "./components/week03/Fruits";
import Foods from "./components/week03/Foods";
const App = () => {
  return (
    <div className="App">
      <h1>week03</h1>
      <Foods />
      <Join />
      <Product />
      <Fruits />
    </div>
  );
};

export default App;
