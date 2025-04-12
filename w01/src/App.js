import "./App.css";
import Books from "./components/week06/Books.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-3">week06</h1>
      <Books />
    </Container>
  );
};

export default App;
