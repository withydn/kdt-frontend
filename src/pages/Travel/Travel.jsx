import React, { useEffect, useState } from 'react';
import styles from './Travel.module.css';
import { fetchSigungu } from '../../store/modules/fetchSigungu';
import { fetchTourList } from '../../store/modules/fetchTourList';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Travel() {
  const [searchInfo, setSearchInfo] = useState({
    type: 'areaBasedList',
    areaCode: '1',
    sigunguCode: '1',
    contentCode: '',
  });
  const { sigunGuData, loading } = useSelector((state) => state.fetchsigungu);
  const { tourData } = useSelector((state) => state.fetchTourlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSigungu(searchInfo.areaCode));
  }, []);

  const handleAreaClick = (area) => {
    setSearchInfo({ ...searchInfo, areaCode: area.code, sigunguCode: '', contentCode: '' });
    dispatch(fetchSigungu(area.code));
  };

  const handleSigunguClick = (sigungu) => {
    setSearchInfo({ ...searchInfo, sigunguCode: sigungu.code });
  };

  const handleContentTypeClick = (contentType) => {
    setSearchInfo({ ...searchInfo, contentCode: contentType.contentTypeId });
  };

  const handleSearchClick = () => {
    const { type, areaCode, sigunguCode, contentCode } = searchInfo;
    dispatch(fetchTourList(type, areaCode, sigunguCode, contentCode));
  };
  console.log(tourData);
  return (
    <section className={styles.container}>
      <h2>지역을 선택하세요</h2>

      <div className={styles.areaSelectWrapper}>
        <div className={styles.areaList}>
          {areaCodes.map((area) => (
            <div
              key={area.name}
              className={`${styles.areaName} ${searchInfo.areaCode === area.code ? styles.active : ''}`}
              onClick={() => handleAreaClick(area)}
            >
              {area.name}
            </div>
          ))}
        </div>

        <div className={styles.sigunguList}>
          {sigunGuData &&
            sigunGuData.map((sigungu) => (
              <div
                key={sigungu.name}
                className={`${styles.sigunguName} ${searchInfo.sigunguCode === sigungu.code ? styles.active : ''}`}
                onClick={() => handleSigunguClick(sigungu)}
              >
                {sigungu.name}
              </div>
            ))}
        </div>

        <div className={styles.contentList}>
          {contentTypes.map((contentType) => (
            <div
              key={contentType.content}
              className={`${styles.contentName} ${
                searchInfo.contentCode === contentType.contentTypeId ? styles.active : ''
              }`}
              onClick={() => {
                handleContentTypeClick(contentType);
              }}
            >
              {contentType.content}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSearchClick}>검색하기</button>

      <div className={styles.itemList}>
        {tourData &&
          tourData.map((data) => (
            <Link
              to={`/detail/${data.contentid}`}
              key={`${data.contentid}`}
              state={{ contentId: data.contentid }}
              className={styles.itemWrapper}
            >
              <img src={data.firstimage} alt='' className={styles.img} />
              <div>{data.title}</div>
              <div>{data.addr1}</div>
            </Link>
          ))}
      </div>
    </section>
  );
}

// 컨텐츠 타입
const contentTypes = [
  { content: '관광지', contentTypeId: '12' },
  { content: '문화시설', contentTypeId: '14' },
  { content: '여행코스', contentTypeId: '25' },
  { content: '레포츠', contentTypeId: '28' },
  { content: '쇼핑', contentTypeId: '38' },
  { content: '음식점', contentTypeId: '39' },
];

// 도시(서울, 인천, ..)에 대한 코드
const areaCodes = [
  {
    rnum: 1,
    code: '1',
    name: '서울',
  },
  {
    rnum: 2,
    code: '2',
    name: '인천',
  },
  {
    rnum: 3,
    code: '3',
    name: '대전',
  },
  {
    rnum: 4,
    code: '4',
    name: '대구',
  },
  {
    rnum: 5,
    code: '5',
    name: '광주',
  },
  {
    rnum: 6,
    code: '6',
    name: '부산',
  },
  {
    rnum: 7,
    code: '7',
    name: '울산',
  },
  {
    rnum: 8,
    code: '8',
    name: '세종시',
  },
  {
    rnum: 9,
    code: '31',
    name: '경기도',
  },
  {
    rnum: 10,
    code: '32',
    name: '강원도',
  },
  {
    rnum: 11,
    code: '33',
    name: '충청북도',
  },
  {
    rnum: 12,
    code: '34',
    name: '충청남도',
  },
  {
    rnum: 13,
    code: '35',
    name: '경상북도',
  },
  {
    rnum: 14,
    code: '36',
    name: '경상남도',
  },
  {
    rnum: 15,
    code: '37',
    name: '전라북도',
  },
  {
    rnum: 16,
    code: '38',
    name: '전라남도',
  },
  {
    rnum: 17,
    code: '39',
    name: '제주도',
  },
];
