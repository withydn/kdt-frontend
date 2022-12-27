import React, { useEffect } from 'react';

export default function Kakao({ Lat, Lng }) {
  const { kakao } = window;
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(Lat, Lng);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);

  return <div id='map' style={{ width: '800px', height: '400px' }}></div>;
}
