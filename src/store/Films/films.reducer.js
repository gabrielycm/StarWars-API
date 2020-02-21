import { TYPES } from './films.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
    error:"",
}

const filmsreducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_FILMS:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_FILMS:
      return { ...state, data: action.payload.data, loading: false };
    case TYPES.ERROR_REQUEST_FILMS:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default filmsreducer