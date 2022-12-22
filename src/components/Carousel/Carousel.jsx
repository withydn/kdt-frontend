import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';
import CarouselItem from '../CarouselItem/CarouselItem';

export default function Carousel({ sectionRef }) {
  const [slide, setSlide] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(${-(100 / backgroundInfo.length) * slide}%)`;
    sectionRef.current.style.backgroundColor = backgroundInfo[slide].section;
  }, [slide]);

  const handleNextClick = () => {
    setSlide((prev) => prev + 1);
    if (slide === 3) setSlide(0);
  };

  const handlePrevClick = () => {
    setSlide((prev) => prev - 1);
    if (slide === 0) setSlide(3);
  };

  return (
    <>
      <div className={styles.carouselWrapper} ref={carouselRef}>
        {backgroundInfo.map((el, index) => (
          <CarouselItem key={index} item={el} />
        ))}
      </div>
      <span className={styles.next} onClick={handleNextClick}>
        다음
      </span>
      <span className={styles.prev} onClick={handlePrevClick}>
        이전
      </span>
    </>
  );
}

const backgroundInfo = [
  {
    section: '#b0edf6',
    carousel: "url('images/carouselTravel.jpeg')",
    text: '행복한 여행<br/>함께 준비해요',
    color: '#FFFFFF',
  },
  {
    section: '#ACA7CB',
    carousel: "url('images/carouselFestival.jpeg')",
    text: '다양한 축제<br/>한눈에 보기',
    color: '#FFFFFF',
  },
  {
    section: '#f8dec3',
    carousel: "url('images/carouselAccommodation.jpeg')",
    text: '1년 365일<br/>숙박 체크',
    color: '#303030',
  },
  {
    section: '#7fd1ae',
    carousel: "url('images/carouselReview.jpeg')",
    text: '리뷰쓰고<br/>숙박권 받자',
    color: '#303030',
  },
];
