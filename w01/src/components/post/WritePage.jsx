import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { app } from "../../firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const WritePage = () => {
  const db = getFirestore(app);
  const navi = useNavigate();
  const [form, setForm] = useState({
    email: sessionStorage.getItem("email"),
    title: "",
    body: "",
    date: "",
  });

  const { title, body } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || body === "") {
      alert("input your title or Contents");
    } else {
      const date = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
      addDoc(collection(db, "post"), { ...form, date });
      alert("Post Success");
      navi("/post");
    }
  };

  const onReset = (e) => {
    e.preventDefault();
    setForm({ ...form, title: "", body: "" });
  };

  return (
    <div>
      <h1 className="my-5 text-center">Write</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Form onSubmit={onSubmit} onReset={onReset}>
            <Form.Control
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={onChange}
            />
            <Form.Control
              name="body"
              value={body}
              as="textarea"
              rows={10}
              placeholder="Enter Content"
              className="my-2"
              onChange={onChange}
            />
            <div className="text-center">
              <Button type="submit" className="px-5 mx-2" size="sm">
                Submit
              </Button>
              <Button
                type="reset"
                className="px-5"
                size="sm"
                variant="secondary"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default WritePage;
