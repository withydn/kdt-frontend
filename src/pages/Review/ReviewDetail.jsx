import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Review.module.css";
import { Link } from "react-router-dom";
export default function ReviewDetail() {
  const { reviewNo } = useParams();
  const [like, setLike] = useState(0);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchReview();
    addCount();
  }, []);

  async function fetchReview() {
    const reviewRes = await fetch(`http://localhost:4500/review/${reviewNo}`);
    if (reviewRes.status === 200) {
      const data = await reviewRes.json();
      console.log(data);
      setReview(data);
      setLike(data.like);
    }
  }
  async function addLike() {
    const likeRes = await fetch(`http://localhost:4500/review/addLike/${reviewNo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (likeRes.status === 200) {
      const msg = await likeRes.json();
      if (msg === "업데이트 성공") {
        setLike(like + 1);
      } else {
        alert("업데이트 문제");
      }
    }
  }
  async function addCount() {
    const countRes = await fetch(`http://localhost:4500/review/addCount/${reviewNo}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (countRes.status === 200) {
      const msg = await countRes.json();
      if (msg === "업데이트 문제") {
        alert("업데이트 문제");
      }
    }
  }

  return (
    <div>
      {/* <div>review ID is {reviewID} </div> */}
      <div className={styles.wrap}>
        <h3 className={styles.title}>나의 여행기</h3>
        <div className={styles.title2}>
          <span>{review.title}</span>
          <div className={styles.title3}>
            <span>{review.author}</span>
            <span>{review.registerTime}</span>
            <span>{review.counts}</span>
          </div>
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: review.content }}></div>
        <div className={styles.like}>
          후기가 도움되었나요? <button onClick={() => addLike()}>:+1:</button>
          {like}
        </div>
        <br />
        <button className={styles.btn}>
          <Link to="/review">목록</Link>
        </button>
      </div>
    </div>
  );
}
