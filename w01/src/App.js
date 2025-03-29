import "./App.css";
import Students from "./components/week04/Students";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
const App = () => {
  return (
    <Container>
      <h1 className="text-center">week04</h1>
      <Row>
        <Col lg={6}>
          <Students />
        </Col>
        <Col lg={6}>
          <Students />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
