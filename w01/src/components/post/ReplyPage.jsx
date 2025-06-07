import React, { useState } from "react";
import { app } from "../../firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import ReplyList from "./ReplyList";

const ReplyPage = ({ id }) => {
  const db = getFirestore(app);
  const [loading, setLoading] = useState(false);
  const email = sessionStorage.getItem("email");
  const navi = useNavigate();
  const [contents, setContents] = useState("");
  const onWrite = async (e) => {
    e.preventDefault();
    setLoading(true);
    const reply = {
      pid: id,
      email: email,
      contents: contents,
      date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
    };
    await addDoc(collection(db, "reply"), reply);
    setContents("");
    setLoading(false);
  };

  // loading
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="my-2">
      {email ? (
        <Row className="justify-content-center">
          <Col md={10} style={{ display: "flex" }}>
            <TextareaAutosize
              className="textarea"
              value={contents}
              placeholder="Reply"
              onChange={(e) => setContents(e.target.value)}
            />
            <Button
              disabled={contents === ""}
              className="mx-2"
              onClick={onWrite}
            >
              Reply
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={10} className="mx-auto">
            <Button className="w-100" onClick={() => navi("/login")}>
              Login
            </Button>
          </Col>
        </Row>
      )}
      <ReplyList pid={id} />
    </div>
  );
};

export default ReplyPage;
