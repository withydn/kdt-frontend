import React, { useRef, useState } from 'react';
import styles from './Main.module.css';
import Carousel from '../../components/Carousel/Carousel';
import SelectInput from '../../components/SelectInput/SelectInput';
import { useSelector, useDispatch } from 'react-redux';
import { changeType } from '../../store/modules/searchInfo';

export default function Main() {
  const [selected, setSelected] = useState('여행');
  const sectionRef = useRef();
  const { type, areaCode, sigunguCode } = useSelector((state) => state.searchInfo);
  const dispatch = useDispatch();

  const handleOptionClick = (e) => {
    setSelected(e.target.textContent);
    dispatch(changeType(selected));
  };

  const handleButtonClick = () => {};

  console.log(type, areaCode, sigunguCode);
  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={styles.innerLeft}>
        <h2 className={styles.title}>
          고객님,
          <br />
          어떤 여행을 꿈꾸시나요?
        </h2>

        <ul className={styles.optionList} onClick={handleOptionClick}>
          <li className={`${styles.option} ${selected === '여행' && styles.active}`}>여행</li>
          <li className={`${styles.option} ${selected === '축제' && styles.active}`}>축제</li>
          <li className={`${styles.option} ${selected === '숙박' && styles.active}`}>숙박</li>
        </ul>

        <SelectInput />

        <button className={styles.button}>{selected} 알아보기</button>
      </div>

      <div className={styles.innerRight}>
        <Carousel sectionRef={sectionRef} />
      </div>
    </section>
  );
}
