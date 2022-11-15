export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const ERROR = 'ERROR';

export const getAllCountries = () => {
  return async function (dispatch) {
    try {
      const response = await fetch('http://localhost:3001/countries');
      const countries = await response.json();
      return dispatch({ type: GET_ALL_COUNTRIES, payload: countries });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
