import { TYPES } from './peoples.action'

const initial_state = {
    data: [],
    loading: true,
    totalPages:0,
}

const peoplesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case TYPES.REQUEST_PEOPLE:
      return { ...state, loading: true };
    case TYPES.SUCCESSS_PEOPLE:
      return { ...state, data: action.payload.people, loading: false };
    case TYPES.ERROR_REQUEST_PEOPLE:
      return { ...state, error: action.payload.error, loading: false };
    default:
      return state;
  }
};
export default peoplesReducer