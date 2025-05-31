import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { Table } from "react-bootstrap";

const ListPage = () => {
  const db = getFirestore(app);
  const [page, setPage] = useState(1);
  const [last, setLast] = useState(0);
  const email = sessionStorage.getItem("email");
  const navi = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  // List
  const getList = () => {
    const q = query(collection(db, "post"), orderBy("date", "desc"));
    setLoading(true);
    onSnapshot(q, (snapshot) => {
      const rows = [];
      let no = 1;
      snapshot.forEach((row) => {
        const start = (page - 1) * 5 + 1;
        const end = page * 5;
        if (no >= start && no <= end) {
          rows.push({
            no: no,
            id: row.id,
            ...row.data(),
          });
        }
        no++;
      });
      setPosts(rows);
      setLast(Math.ceil(no / 5));
      console.log(rows);
      setLoading(false);
    });
  };

  useEffect(() => {
    getList();
  }, [page]);

  const onClickWrite = () => {
    if (email) {
      navi("/post/write");
    } else {
      sessionStorage.setItem("target", "/post/write");
      alert("Please login");
      navi("/login");
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
      <h1 className="my-5 text-center">Board List</h1>
      <div className="text-end">
        <Button className="px-5" size="sm" onClick={onClickWrite}>
          Write
        </Button>
      </div>
      <Table hover striped bordered className="my-2">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.no}</td>
              <td>{post.title}</td>
              <td>{post.email}</td>
              <td>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center my-3">
        <Button
          size="sm"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <span className="mx-2">
          {page} / {last}
        </span>
        <Button
          size="sm"
          onClick={() => setPage(page + 1)}
          disabled={posts.length < 5}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ListPage;
