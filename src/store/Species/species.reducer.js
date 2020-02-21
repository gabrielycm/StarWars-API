import { TYPES } from './species.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:'',
}

const speciesreducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_SPECIES:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_SPECIES:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST_SPECIES:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default speciesreducer