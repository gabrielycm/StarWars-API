import * as Api from '../../service/swapi.service'

export const TYPES = {
  REQUEST_SERVICE: "REQUEST_SERVICE",
  SUCCESSS_REQUEST: "SUCCESSS_REQUEST",
  ERROR_REQUEST: "ERROR_REQUEST",
}

export const getService = (service, page) => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_SERVICE
    });
    try {
      const response = await Api.getSwapi(service, page);
      dispatch({
        type: TYPES.SUCCESSS_REQUEST,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST,
        payload: { error: error }
      });
    }
  };