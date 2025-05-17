import "./App.css";
import Menubar from "./components/Menubar.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const basename = process.env.PUBLIC_URL;
  return (
    <div>
      <img src={basename + "/home.jpg"} width="100%" alt="" />
      <Menubar />
      <Footer />
    </div>
  );
};

export default App;
