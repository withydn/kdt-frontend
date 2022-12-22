import React from 'react';
import styles from './SignUp.module.css';
export default function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.signup_box}>
        <div className={styles.signUp_text}>
          <h1>회원가입</h1>
        </div>
        <ul className={styles.signup_input}>
          <li>
            <div className={styles.signup_boxtext}>이름</div>
            <input type='text' className={styles.signup_box1}></input>
          </li>
          <li>
            <div className={styles.signup_boxtext}>이메일</div>
            <input type='email' className={styles.signup_box1}></input>
          </li>
          <li>
            <div className={styles.signup_boxtext}>비밀번호</div>
            <input type='password' className={styles.signup_box1}></input>
          </li>
          <li>
            <h2>관심여행지</h2>
            <select name='tourli'>
              <option value=''>선택</option>
              <option value='강원'>강원</option>
              <option value='경기'>경기</option>
              <option value='경남'>경남</option>
              <option value='경북'>경북</option>
              <option value='경주'>경주</option>
              <option value='대구'>대구</option>
              <option value='대전'>대전</option>
              <option value='부산'>부산</option>
              <option value='서울'>서울</option>
              <option value='울산'>울산</option>
              <option value='인천'>인천</option>
              <option value='전남'>전남</option>
              <option value='전북'>전북</option>
              <option value='제주'>제주</option>
              <option value='충남'>충남</option>
              <option value='충북'>충북</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}
