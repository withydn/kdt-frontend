const initState = {
  loading: false,
  distanceData: [],
  error: '',
};

const FETCH_BYDISTANCE_REQUEST = 'fetchByDistance/FETCH_BYDISTANCE_REQUEST';
const FETCH_BYDISTANCE_SUCCESS = 'fetchByDistance/FETCH_BYDISTANCE_SUCCESS';
const FETCH_BYDISTANCE_FAIL = 'fetchByDistance/FETCH_BYDISTANCE_FAIL';

function fetchByDistanceRequest() {
  return { type: FETCH_BYDISTANCE_REQUEST };
}

function fetchByDistanceSuccess(payload) {
  return { type: FETCH_BYDISTANCE_SUCCESS, payload };
}

function fetchByDistanceFail(payload) {
  return { type: FETCH_BYDISTANCE_FAIL, payload };
}

export function fetchByDistance(longitude, latitude) {
  const SERVICE_KEY =
    'pXHnCUsvtd3WiENV2EBHwQIjv7VLn%2BH%2BSXrFKtODpyn3T9x9eH8S5qzsx%2FSQAC8d7%2FMJjLy139f3ui0IrsCZGw%3D%3D';

  return (dispatch) => {
    dispatch(fetchByDistanceRequest());
    fetch(
      `http://apis.data.go.kr/B551011/KorService/locationBasedList?serviceKey=${SERVICE_KEY}&numOfRows=15&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=S&mapX=${longitude}&mapY=${latitude}&radius=2000&listYN=Y&_type=json`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.response?.header.resultCode === '0000') {
          dispatch(fetchByDistanceSuccess(data.response?.body.items.item));
        }
      })
      .catch((error) => dispatch(fetchByDistanceFail(error)));
  };
}

export default function fetchByDistanceReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_BYDISTANCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BYDISTANCE_SUCCESS:
      return { ...state, distanceData: action.payload, loading: false };
    case FETCH_BYDISTANCE_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
