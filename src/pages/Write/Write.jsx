import React from "react";
import styles from "./Write.module.css";

export default function Write() {
  return (
    <div className={styles.container}>
      <div className={styles.write_box}>
        <div className={styles.title_box}>
          <h1>작성페이지</h1>
          <h3 className={styles.h3}>*는 필수입력 정보입니다.</h3>
        </div>
        <div className={styles.item_box}>
          <div className={styles.item_name}>*여행상품</div>
          <div className={styles.item_tourli}>
            <select className={styles.tourli}>
              <option value="">선택</option>
              <option value="강원">강원</option>
              <option value="경기">경기</option>
              <option value="경남">경남</option>
              <option value="경북">경북</option>
              <option value="경주">경주</option>
              <option value="대구">대구</option>
              <option value="대전">대전</option>
              <option value="부산">부산</option>
              <option value="서울">서울</option>
              <option value="울산">울산</option>
              <option value="인천">인천</option>
              <option value="전남">전남</option>
              <option value="전북">전북</option>
              <option value="제주">제주</option>
              <option value="충남">충남</option>
              <option value="충북">충북</option>
            </select>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className={styles.content_name}>*제목</div>
          <div className={styles.content_input}>
            <input type="text" value="제목을 입력하세요"></input>
          </div>
        </div>
        <div className={styles.review_box}>
          <div className={styles.review_name}>*내용</div>
          <div className={styles.review_input}></div>
        </div>
        <div className={styles.btn_box}>
          <button className={styles.btn_push}>글쓰기</button>
          <button className={styles.btn_cancel}>취소하기</button>
        </div>
      </div>
    </div>
  );
}
