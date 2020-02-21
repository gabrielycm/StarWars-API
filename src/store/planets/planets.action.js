import * as Api from '../../service/Planets.service'

export const TYPES = {
    REQUEST_PLANETS: "REQUEST_PLANETS",
    SUCCESSS_PLANETS: "SUCCESSS_PLANETS",
    ERROR_REQUEST_PLANETS: "ERROR_REQUEST_PLANETS",
}

export const getPlanets = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_PLANETS
    });
    try {
      const response = await Api.getPlanets(body);
      dispatch({
        type: TYPES.SUCCESSS_PLANETS,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_PLANETS,
        payload: { error: error }
      });
    }
  };