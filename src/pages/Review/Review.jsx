import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Review.module.css";
export default function Review() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchAllReview();
  }, []);
  async function fetchAllReview() {
    const reviewRes = await fetch("http://localhost:4500/review/getAll");
    if (reviewRes.status === 200) {
      const data = await reviewRes.json();
      setReviews(data);
    }
  }
  // const reviews = [
  //   {
  //     no: 1,
  //     title: "테스트",
  //     author: "회원1",
  //     registerTime: "2022-12-22",
  //     counts: 1,
  //     like: 0,
  //   },
  //   {
  //     no: 2,
  //     title: "테스트",
  //     author: "회원2",
  //     registerTime: "2022-12-22",
  //     counts: 1,
  //     like: 0,
  //   },
  //   {
  //     no: 3,
  //     title: "테스트",
  //     author: "회원3",
  //     registerTime: "2022-12-22",
  //     counts: 1,
  //     like: 0,
  //   },
  // ];
  // async function getAllReviews() {
  //   const reviewResponse = await fetch("backend address");
  //   const allReviews = await reviewResponse.json();
  //   setReviews(allReviews);
  // }
  return (
    <div className={styles.wrap}>
      <h3 className={styles.title}>여행 후기 게시판</h3>
      <p>총 {reviews.length}건</p>
      <table>
        <tr>
          <th style={{ width: "100px" }}>번호</th>
          <th style={{ width: "450px" }}>제목</th>
          <th style={{ width: "180px" }}>작성자</th>
          <th style={{ width: "180px" }}>등록일</th>
          <th style={{ width: "150px" }}>조회수</th>
          <th style={{ width: "150px" }}>추천수</th>
        </tr>
        {reviews.map((el) => {
          return (
            <tr key={el.no}>
              <td>{el.no}</td>
              <td>
                <Link to={`${el.no}`}>{el.title}</Link>
              </td>
              <td>{el.author}</td>
              <td>{el.registerTime}</td>
              <td>{el.counts}</td>
              <td>{el.like}</td>
            </tr>
          );
        })}
      </table>
      <Link to="write">
        <button className={styles.btn}>글쓰기</button>
      </Link>
    </div>
  );
}
