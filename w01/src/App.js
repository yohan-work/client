import "./App.css";
import Locals from "./components/week07/Locals.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-3">week07</h1>
      <Locals />
    </Container>
  );
};

export default App;
