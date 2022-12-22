import React from 'react';
import styles from './CarouselItem.module.css';

export default function CarouselItem({ item }) {
  console.log(item);
  return (
    <div style={{ backgroundImage: item.carousel }} className={styles.carouselItem}>
      {/* <div className={styles.text} style={{ color: item.color }} dangerouslySetInnerHTML={{ __html: item.text }} /> */}
    </div>
  );
}
