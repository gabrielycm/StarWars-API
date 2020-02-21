import { TYPES } from './vehicles.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:'',
}

const vehiclesreducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_VEHICLES:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_VEHICLES:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST_VEHICLES:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default vehiclesreducer