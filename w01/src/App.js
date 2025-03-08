import "./App.css";
import Hello from "./components/Hello";
import Counter from "./components/Counter";

const App = () => {
  const name = "John";
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>TEST</h3>
      <p style={{ color: "white", background: "blue" }}>Name: {name}</p>
      <hr />
      <Hello />
      <Counter />
    </div>
  );
};

export default App;
