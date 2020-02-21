import * as Api from '../../service/Vehicles.service'

export const TYPES = {
    REQUEST_VEHICLES: "REQUEST_VEHICLES",
    SUCCESSS_VEHICLES: "SUCCESSS_VEHICLES",
    ERROR_REQUEST_VEHICLES: "ERROR_REQUEST_VEHICLES",
}

export const getVehicle = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_VEHICLES
    });
    try {
      const response = await Api.getVehicles(body);
      dispatch({
        type: TYPES.SUCCESSS_VEHICLES,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_VEHICLES,
        payload: { error: error }
      });
    }
  };