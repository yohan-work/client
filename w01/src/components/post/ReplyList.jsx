import React, { useState, useEffect } from "react";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { Row, Col } from "react-bootstrap";

const ReplyList = ({ pid }) => {
  const db = getFirestore(app);
  const [list, setList] = useState([]);

  const getList = () => {
    const q = query(
      collection(db, "reply"),
      where("pid", "==", pid),
      orderBy("date", "desc")
    );
    onSnapshot(q, (snapshot) => {
      let rows = [];
      snapshot.forEach((row) => {
        rows.push({ id: row.id, ...row.data() });
      });
      console.log(rows);
      setList(rows);
    });
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <Row className="my-2">
      <Col md={10} className="mx-auto">
        <h3>Comment Lists</h3>
        {list.map((reply) => (
          <div key={reply.id}>
            <div>
              {reply.date} : {reply.email}
            </div>
            <div>
              <p style={{ whiteSpace: "pre-wrap" }}>{reply.contents}</p>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default ReplyList;
