import "./App.css";
import Menubar from "./components/Menubar.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <img src="./home.jpg" width="100%" alt="" />
      <Menubar />
      <Footer />
    </div>
  );
};

export default App;
