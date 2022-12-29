const initState = {
  type: 'areaBasedList',
  areaCode: '',
  sigunguCode: '',
  contentTypeCode: '',
};

const CHANGE_TYPE = 'searchInfo/CHANGE_TYPE';
const CHAGNE_AREACODE = 'searchInfo/CHAGNE_AREACODE';
const CHAGNE_SIGUNGUCODE = 'searchInfo/CHAGNE_SIGUNGUCODE ';
const CHAGNE_CONTENTTYPECODE = 'searchInfo/CHAGNE_CONTENTTYPECODE ';

export function changeType(payload) {
  return { type: CHANGE_TYPE, payload };
}

export function changeAreaCode(payload) {
  return { type: CHAGNE_AREACODE, payload };
}

export function changeSigunguCode(payload) {
  return { type: CHAGNE_SIGUNGUCODE, payload };
}

export function changeContentTypeCode(payload) {
  return { type: CHAGNE_CONTENTTYPECODE, payload };
}

export default function searchInfoReducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_TYPE:
      let searchType;
      if (action.payload === '여행') searchType = 'areaBasedList';
      if (action.payload === '축제') searchType = 'searchFestival';
      if (action.payload === '숙박') searchType = 'searchStay';
      return {
        ...state,
        type: searchType,
      };

    case CHAGNE_AREACODE:
      return { ...state, areaCode: action.payload };

    case CHAGNE_SIGUNGUCODE:
      return { ...state, sigunguCode: action.payload };

    case CHAGNE_CONTENTTYPECODE:
      return { ...state, contentTypeCode: action.payload };

    default:
      return state;
  }
}
