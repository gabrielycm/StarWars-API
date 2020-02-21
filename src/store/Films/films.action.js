import * as Api from '../../service/Films.service'

export const TYPES = {
    REQUEST_FILMS: "REQUEST_FILMS",
    SUCCESSS_FILMS: "SUCCESSS_FILMS",
    ERROR_REQUEST_FILMS: "ERROR_REQUEST_FILMS",
}

export const getFilm = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_FILMS
    });
    try {
      const response = await Api.getFilms(body);
      dispatch({
        type: TYPES.SUCCESSS_FILMS,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_FILMS,
        payload: { error: error }
      });
    }
  };