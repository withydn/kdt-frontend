import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.login_box}>
          <div className={styles.login_text}>
            <h3>로그인</h3>
          </div>
          <ul className={styles.login_input}>
            <li>
              <input
                className={styles.login_inputbox1}
                type="email"
                placeholder="아이디(이메일 계정)"
              ></input>
            </li>
            <li>
              <input
                className={styles.login_inputbox2}
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></input>
            </li>
          </ul>
          <button className={styles.login_btn}>로그인</button>
          <Link to="/signup">
            <button className={styles.register_btn}>회원가입</button>
          </Link>
        </div>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}
