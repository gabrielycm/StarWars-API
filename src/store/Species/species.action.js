import * as Api from '../../service/Species.service'

export const TYPES = {
    REQUEST_SPECIES: "REQUEST_SPECIES",
    SUCCESSS_SPECIES: "SUCCESSS_SPECIES",
    ERROR_REQUEST_SPECIES: "ERROR_REQUEST_SPECIES",
}

export const getSpecie = body => async dispatch => {
    dispatch({
      type: TYPES.REQUEST_SPECIES
    });
    try {
      const response = await Api.getSpecies(body);
      dispatch({
        type: TYPES.SUCCESSS_SPECIES,
        payload: { data: response }
      });
    } catch (error) {
      dispatch({
        type: TYPES.ERROR_REQUEST_SPECIES,
        payload: { error: error }
      });
    }
  };