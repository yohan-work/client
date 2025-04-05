import "./App.css";
import MenuRouter from "./components/week05/MenuRouter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <h1 className="text-center my-3">week05</h1>
      <MenuRouter />
    </Container>
  );
};

export default App;
