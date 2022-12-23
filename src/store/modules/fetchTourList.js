const initState = {
  data: [],
  loading: false,
  error: '',
};

const FETCH_TOURLIST_REQUEST = 'fetchSigungu/FETCH_TOURLIST_REQUEST';
const FETCH_TOURLIST_SUCCESS = 'fetchSigungu/FETCH_TOURLIST_SUCCESS';
const FETCH_TOURLIST_FAIL = 'fetchSigungu/FETCH_TOURLIST_FAIL';

function fetchTourListRequest() {
  return { type: FETCH_TOURLIST_REQUEST };
}

function fetchTourListSuccess(payload) {
  return { type: FETCH_TOURLIST_SUCCESS, payload };
}

function fetchTourListFail(payload) {
  return { type: FETCH_TOURLIST_FAIL, payload };
}

export function fetchTourList(type, areaCode, sigunguCode) {
  const SERVICE_KEY =
    'pXHnCUsvtd3WiENV2EBHwQIjv7VLn%2BH%2BSXrFKtODpyn3T9x9eH8S5qzsx%2FSQAC8d7%2FMJjLy139f3ui0IrsCZGw%3D%3D';

  return (dispatch) => {
    dispatch(fetchTourListRequest());
    fetch(
      // 타입, 지역, 시군구 코드에 따라 api 호출
      `http://apis.data.go.kr/B551011/KorService/${type}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=10&MobileApp=AppTest&MobileOS=ETC&arrange=A&areaCode=${areaCode}&sigunguCode=${sigunguCode}&_type=json`
    )
      .then((res) => res.json())
      .then((data) => dispatch(fetchTourListSuccess(data)))
      .catch((err) => dispatch(fetchTourListFail(err)));
  };
}

export default function fetchTourListReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_TOURLIST_REQUEST:
      return { ...state, loading: true };

    case FETCH_TOURLIST_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case FETCH_TOURLIST_FAIL:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}
