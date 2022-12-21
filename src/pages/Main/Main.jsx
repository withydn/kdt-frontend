import React from 'react';
import styles from './Main.module.css';

export default function Main() {
  return (
    <section className={styles.container}>
      <div className={styles.innerLeft}>
        <h2 className={styles.title}>
          고객님,
          <br />
          어떤 여행을 꿈꾸시나요?
        </h2>

        <ul className={styles.optionList}>
          <li className={styles.option}>국내</li>
          <li className={styles.option}>숙박</li>
        </ul>

        <input className={styles.selectInput} type='text' placeholder='여행지를 선택하세요' />

        <button className={styles.button} to='/'>
          여행 알아보기
        </button>
      </div>

      <div className={styles.innerRight}></div>
    </section>
  );
}
