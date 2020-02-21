import { TYPES } from './starships.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:'',
}

const starshipsreducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_STARSHIPS:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_STARSHIPS:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST_STARSHIPS:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default starshipsreducer