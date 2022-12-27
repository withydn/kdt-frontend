import React, { useState, useEffect, useRef } from 'react';
import styles from './SectionTourlist.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTourList } from '../../store/modules/fetchTourList';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

export default function SectionTourlist() {
  const [slide, setSlide] = useState(4);
  const { tourData, tourLoading } = useSelector((state) => state.fetchTourlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTourList());
  }, []);

  const handleNextClick = () => {
    setSlide((prev) => prev + 1);
  };
  const handlePrevClick = () => {
    setSlide((prev) => prev - 1);
  };

  const carouselSlide = () => {
    if (slide === 15) {
      setTimeout(() => {
        setSlide(5);
      }, 10);
      return {
        transition: '',
        transform: `translateX( ${-297 * 4}px)`,
      };
    } else if (slide === -1) {
      setTimeout(() => {
        setSlide(9);
      }, 10);
      return {
        transition: '',
        transform: `translateX( ${-297 * 10}px)`,
      };
    } else {
      return {
        transition: 'transform 0.2s ease-out',
        transform: `translateX( ${-297 * slide}px)`,
      };
    }
  };

  const carouselData = tourData && [...tourData.slice(6), ...tourData, ...tourData.slice(0, 4)];

  return (
    <section className={styles.container}>
      <div className={styles.itemWrapper}>
        <h2 className={styles.title}>국내여행</h2>
        <div className={styles.itemSlides} style={carouselSlide()}>
          {carouselData &&
            carouselData.map((el, index) => (
              <div key={index} className={styles.itemCard}>
                <img src={el.firstimage} alt='' className={styles.image} />
                <p>{el.title}</p>
                <p>{el.addr1}</p>
              </div>
            ))}
        </div>
        <div className={styles.iconWrapper}>
          <span onClick={handlePrevClick} className={styles.prev}>
            <MdKeyboardArrowLeft className={styles.icons} />
          </span>
          <span onClick={handleNextClick} className={styles.next}>
            <MdKeyboardArrowRight className={styles.icons} />
          </span>
        </div>
      </div>
    </section>
  );
}
