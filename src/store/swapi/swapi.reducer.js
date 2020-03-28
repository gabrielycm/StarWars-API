import { TYPES } from './swapi.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:"",
}

const swapireducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_SERVICE:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_REQUEST:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default swapireducer