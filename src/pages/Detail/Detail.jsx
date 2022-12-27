import React, { useEffect } from 'react';
import styles from './Detail.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailInfo } from '../../store/modules/fetchDetailInfo';
import Kakao from '../../components/Kakao';

export default function Detail() {
  const { infoData, infoLoading } = useSelector((state) => state.fetchDetailInfo);
  const { state } = useLocation();
  const dispatch = useDispatch();
  console.log(state.contentId);

  useEffect(() => {
    dispatch(fetchDetailInfo(state.contentId));
  }, [state.contentId]);

  console.log(infoData);

  return (
    <section className={styles.container}>
      {infoData &&
        infoData.map((data) => (
          <div key={data.contentid}>
            <img src={data.firstimage} alt='' />
            <div>{data.title}</div>
            <div dangerouslySetInnerHTML={{ __html: data.homepage }} />
            <div>{data.addr1}</div>
            <div dangerouslySetInnerHTML={{ __html: data.overview }} />

            <Kakao Lat={data.mapy} Lng={data.mapx} />
          </div>
        ))}
    </section>
  );
}
