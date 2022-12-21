import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to='/' className={styles.logoText}>
          LOGO
        </Link>
      </h1>

      <nav className={styles.navList}>
        <Link to='/travel' className={styles.navItem}>
          여행
        </Link>
        <Link to='/festival' className={styles.navItem}>
          축제
        </Link>
        <Link to='/accommodation' className={styles.navItem}>
          숙박
        </Link>
        <Link to='/review' className={styles.navItem}>
          후기
        </Link>
        <Link to='/login' className={styles.navItem}>
          로그인
        </Link>
        <Link to='/signup' className={styles.navItem}>
          회원가입
        </Link>
      </nav>
    </header>
  );
}
