import React from "react";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";

const MainRouter = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
};

export default MainRouter;
