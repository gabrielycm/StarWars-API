import { TYPES } from './planets.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:'',
}

const planetsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_PLANETS:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_PLANETS:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST_PLANETS:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default planetsReducer