import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, Card, Button } from "react-bootstrap";

const UpdatePage = () => {
  const db = getFirestore(app);
  const [form, setForm] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navi = useNavigate();
  const { id } = params;

  const getPost = async () => {
    setLoading(true);
    const snapshot = await getDoc(doc(db, "post", id));
    console.log(snapshot.data());

    const post = snapshot.data();
    setForm({
      ...post,
      preTitle: post.title,
      preBody: post.body,
    });
    setLoading(false);
  };

  const { title, body, preTitle, preBody, email, date } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  const onReset = () => {
    if (window.confirm("Are you sure you want to reset?")) {
      getPost();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to save?")) {
      setLoading(true);
      const post = { email, body, title, date };
      await setDoc(doc(db, "post", id), post);
      setLoading(false);
      navi(-1);
    }
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
    <div>
      <h1 className="my-5 text-center">Modify</h1>
      <Row>
        <Col md={10} className="mx-auto">
          <Form>
            <Form.Control value={title} name="title" onChange={onChange} />
            <Form.Control
              value={body}
              name="body"
              onChange={onChange}
              as="textarea"
              rows={10}
              className="my-2"
            />
            <div className="text-center">
              <Button
                type="submit"
                disabled={title === preTitle && body === preBody}
                className="px-5"
                onClick={onSubmit}
              >
                Save
              </Button>
              <Button
                type="reset"
                disabled={title === preTitle && body === preBody}
                className="px-5 mx-2"
                variant="danger"
                onClick={onReset}
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

export default UpdatePage;
