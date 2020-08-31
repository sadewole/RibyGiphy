import { FETCHGIF, FETCHGIFID } from '../actions/type';

const initState = {
  loading: false,
  data: [],
  pagination: [],
  singleData: null,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCHGIF:
      return {
        ...state,
        data: payload.data,
        pagination: payload.pagination,
      };

    case FETCHGIFID:
      return {
        ...state,
        singleData: payload.data,
      };
    default:
      return state;
  }
};
