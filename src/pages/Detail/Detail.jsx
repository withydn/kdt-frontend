import React, { useEffect, useState } from 'react';
import styles from './Detail.module.css';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDetailInfo } from '../../store/modules/fetchDetailInfo';
import Kakao from '../../components/Kakao';
import LoadingSpinner from '../../components/LoadingSpinner.jsx/LoadingSpinner';

export default function Detail() {
  const { infoData, infoLoading } = useSelector((state) => state.fetchDetailInfo);
  const { userEmail } = useSelector((state) => state.user);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailInfo(state.contentId));
  }, [state.contentId]);

  const [subscribe, setSubscribe] = useState();

  const fetchLike = async () => {
    const loginInfo = { email: userEmail, contentId: state.contentId };
    const loginResponse = await fetch('http://localhost:4500/addLike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo),
    });

    if (loginResponse.status === 200) {
      const result = await loginResponse.json();
      console.log(result.msg);
      setSubscribe(result.msg);
    }
  };

  return (
    <section className={styles.container}>
      {infoLoading && <LoadingSpinner />}
      {infoData &&
        infoData?.map((data) => (
          <div key={data.contentid}>
            <img src={data.firstimage} alt='' />
            <div>{data.title}</div>
            <div dangerouslySetInnerHTML={{ __html: data.homepage }} />
            <div>{data.addr1}</div>
            <div dangerouslySetInnerHTML={{ __html: data.overview }} />
            <button onClick={() => fetchLike()}>{subscribe}</button>
            <Kakao Lat={data.mapy} Lng={data.mapx} />
          </div>
        ))}
    </section>
  );
}
