import * as Api from '../../service/Peoples.service'

export const TYPES = {
    REQUEST_PEOPLE: "REQUEST_PEOPLE",
    SUCCESSS_PEOPLE: "SUCCESSS_PEOPLE",
    ERROR_REQUEST_PEOPLE: "ERROR_REQUEST_PEOPLE",
}

export const getPeoples = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_PEOPLE
    });
    try {
      const response = await Api.getPeople(body);
      dispatch({
        type: TYPES.SUCCESSS_PEOPLE,
        payload: { people: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_PEOPLE,
        payload: { error: error }
      });
    }
  };