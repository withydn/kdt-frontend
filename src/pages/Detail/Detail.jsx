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
  const { isLogin } = useSelector((state) => state.user);
  const { state } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailInfo(state.contentId));
  }, [state.contentId]);

  const [subscribe, setSubscribe] = useState();

  useEffect(() => {
    const fetchIsCheck = async () => {
      const loginInfo = { email: userEmail, contentId: state.contentId };
      const loginResponse = await fetch('http://localhost:4500/addLike/isCheck', {
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

    if (isLogin) {
      fetchIsCheck();
    }
  }, []);

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
      setSubscribe(result.msg);
    }
  };
  console.log(infoData);
  return (
    <section className={styles.container}>
      <h2>{infoData[0]?.title}</h2>
      {infoLoading && <LoadingSpinner />}
      {infoData?.map((data) => (
        <div key={data.contentid}>
          <div className={styles.infoWrapper}>
            <img className={styles.image} src={data.firstimage || '/images/zoom.png'} alt={data.title} />
            <div className={styles.text}>
              <p>정보</p>

              <div className={styles.test} dangerouslySetInnerHTML={{ __html: data.overview }} />
              {}
              {data.homepage && (
                <>
                  <div>홈페이지</div>
                  <div dangerouslySetInnerHTML={{ __html: data.homepage }} />
                </>
              )}
            </div>
          </div>
          <div>{data.addr1}</div>
          {isLogin && <button onClick={() => fetchLike()}>{subscribe}</button>}
          <Kakao Lat={data.mapy} Lng={data.mapx} />
        </div>
      ))}
    </section>
  );
}
