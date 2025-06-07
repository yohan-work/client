import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import { getFirestore, getDoc, doc, deleteDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import ReplyPage from "./ReplyPage";

const ReadPage = () => {
  const login = sessionStorage.getItem("email");
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const params = useParams();
  const navi = useNavigate();
  const { id } = params;
  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
    email: "",
    date: "",
  });

  const { title, body, email, date } = post;

  const getPost = async () => {
    setLoading(true);
    const snapshot = await getDoc(doc(db, "post", id));
    setPost(snapshot.data());
    setLoading(false);
  };

  const onDelete = async () => {
    if (
      window.confirm(
        `id : (${id}) will be deleted. Are you sure you want to delete?`
      )
    ) {
      await deleteDoc(doc(db, "post", id));
      navi(-1);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

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
      <h1 class="my-5 text-center">Board View</h1>
      {login === email && (
        <Row>
          <Col md={10} className="text-end mx-auto mb-2">
            <Button
              size="sm"
              variant="primary"
              className="me-2"
              onClick={() => navi(`/post/update/${id}`)}
            >
              Edit
            </Button>
            <Button size="sm" variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      )}
      <Row>
        <Col md={10} className="mx-auto">
          <Card>
            <Card.Body>
              <h5>{title}</h5>
              <hr />
              <p style={{ whiteSpace: "pre-wrap" }}>{body}</p>
            </Card.Body>
            <Card.Footer>
              Posted on <b>{date}</b> by <b>{email}</b>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <ReplyPage id={id} />
    </div>
  );
};

export default ReadPage;
