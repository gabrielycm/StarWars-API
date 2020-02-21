import * as Api from '../../service/Starships.service'

export const TYPES = {
    REQUEST_STARSHIPS: "REQUEST_STARSHIPS",
    SUCCESSS_STARSHIPS: "SUCCESSS_STARSHIPS",
    ERROR_REQUEST_STARSHIPS: "ERROR_REQUEST_STARSHIPS",
}

export const getStarship = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_STARSHIPS
    });
    try {
      const response = await Api.getStarships(body);
      dispatch({
        type: TYPES.SUCCESSS_STARSHIPS,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_STARSHIPS,
        payload: { error: error }
      });
    }
  };