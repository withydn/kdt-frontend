import React from 'react';
import styles from './Accommodation.module.css';

import { changeAreaCode, changeSigunguCode, changeDate } from '../../store/modules/searchInfo';
import { fetchSigungu } from '../../store/modules/fetchSigungu';
import { fetchAccommodation } from '../../store/modules/fetchAccommodation';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paginator from '../../components/Paginator/Paginator';
import LoadingSpinner from '../../components/LoadingSpinner.jsx/LoadingSpinner';
import { changeInitState } from '../../store/modules/fetchDetailInfo';

export default function Accommodation() {
  const { areaCode, sigunguCode } = useSelector((state) => state.searchInfo);
  const { accommoData, accommoLoading } = useSelector((state) => state.fetchAccommodation);
  const { sigunGuData } = useSelector((state) => state.fetchsigungu);
  const dispatch = useDispatch();

  console.log(accommoData);
  const handleAreaChange = (e) => {
    dispatch(changeAreaCode(e.target.value));
    dispatch(fetchSigungu(e.target.value));
  };

  const handleSigunguChange = (e) => {
    dispatch(changeSigunguCode(e.target.value));
  };

  const handleSearchClick = () => {
    if (areaCode === '' || sigunguCode === '') {
      alert('옵션을 선택해 주세요!');
    } else {
      dispatch(fetchAccommodation('searchStay', areaCode, sigunguCode));
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>숙박 지역을 선택하세요</h2>
      <div className={styles.boxWrapper}>
        <Box className={styles.areaBox}>
          <FormControl fullWidth>
            <InputLabel id='area'>지역</InputLabel>
            <Select labelId='area' id='areaSelect' label='지역' onChange={handleAreaChange} value={areaCode}>
              {areaCodes.map((area) => (
                <MenuItem key={area.name} value={area.code}>
                  {area.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box className={styles.sigunguBox}>
          <FormControl fullWidth>
            <InputLabel id='sigungu'>시군구</InputLabel>
            <Select
              labelId='sigungu'
              id='sigunguSelect'
              label='시군구'
              value={sigunguCode}
              onChange={handleSigunguChange}
            >
              {sigunGuData &&
                sigunGuData.map((sigungu) => (
                  <MenuItem key={sigungu.name} value={sigungu.code}>
                    {sigungu.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>

        <button className={styles.searchBtn} onClick={handleSearchClick}>
          검색하기
        </button>
      </div>

      <div className={styles.itemList}>
        {accommoLoading && <LoadingSpinner />}
        {accommoData.items?.item?.map((data) => (
          <Link
            to={`/detail/${data.contentid}`}
            key={`${data.contentid}`}
            state={{ contentId: data.contentid, tel: data.tel }}
            className={styles.itemWrapper}
            onClick={() => dispatch(changeInitState())}
          >
            <img src={data.firstimage || 'images/zoom.png'} alt={data.title} className={styles.img} />
            <div className={styles.title}>{data.title}</div>
          </Link>
        ))}
        {accommoData?.totalCount === 0 && <div>없습니다</div>}
      </div>

      {
        <Paginator
          numOfRows={accommoData?.numOfRows}
          totalCount={accommoData?.totalCount}
          pageNo={accommoData?.pageNo}
        />
      }
    </section>
  );
}

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
