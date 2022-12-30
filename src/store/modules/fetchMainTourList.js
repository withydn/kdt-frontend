const initState = {
  mainTourData: [],
  mainTourLoading: false,
  mainTourError: '',
};

const FETCH_MAINTOURLIST_REQUEST = 'fetchMainTourlist/FETCH_MAINTOURLIST_REQUEST';
const FETCH_MAINTOURLIST_SUCCESS = 'fetchMainTourlist/FETCH_MAINTOURLIST_SUCCESS';
const FETCH_MAINTOURLIST_FAIL = 'fetchMainTourlist/FETCH_MAINTOURLIST_FAIL';

function fetchTourListRequest() {
  return { type: FETCH_MAINTOURLIST_REQUEST };
}

function fetchTourListSuccess(payload) {
  return { type: FETCH_MAINTOURLIST_SUCCESS, payload };
}

function fetchTourListFail(payload) {
  return { type: FETCH_MAINTOURLIST_FAIL, payload };
}

export function fetchTourList(
  type = 'areaBasedList',
  areaCode = '1',
  sigunguCode = '1',
  contentTypeId = '12',
  pageNo = '1'
) {
  const SERVICE_KEY =
    'pXHnCUsvtd3WiENV2EBHwQIjv7VLn%2BH%2BSXrFKtODpyn3T9x9eH8S5qzsx%2FSQAC8d7%2FMJjLy139f3ui0IrsCZGw%3D%3D';

  const contentType = contentTypeId ? `&contentTypeId=${contentTypeId}` : '';

  return (dispatch) => {
    dispatch(fetchTourListRequest());
    fetch(
      // 타입, 지역, 시군구 코드에 따라 api 호출
      `http://apis.data.go.kr/B551011/KorService/${type}?serviceKey=${SERVICE_KEY}&pageNo=${pageNo}&numOfRows=8&MobileApp=AppTest&MobileOS=ETC&arrange=O&areaCode=${areaCode}&sigunguCode=${sigunguCode}&_type=json${contentType}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.response?.header.resultCode === '0000') {
          dispatch(fetchTourListSuccess(data.response.body));
        }
      })
      .catch((err) => dispatch(fetchTourListFail(err)));
  };
}

export default function fetchTourListReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_MAINTOURLIST_REQUEST:
      return { ...state, mainTourLoading: true };

    case FETCH_MAINTOURLIST_SUCCESS:
      return { ...state, mainTourData: action.payload, mainTourLoading: false };

    case FETCH_MAINTOURLIST_FAIL:
      return { ...state, mainTourError: action.payload, mainTourLoading: false };

    default:
      return state;
  }
}
