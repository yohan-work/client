import "./App.css";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Say from "./components/Say";
import Event1 from "./components/Event1";
import Event2 from "./components/Event2";
const App = () => {
  return (
    <div className="App">
      <h1>week02</h1>
      {/* <Example1 name="react" address="seoul" />
      <Example2 name="react2" address="incheon" /> */}
      {/* <Counter1 />
      <Counter2 />
      <Say /> */}
      <Event1 />
      <Event2 />
    </div>
  );
};

export default App;
