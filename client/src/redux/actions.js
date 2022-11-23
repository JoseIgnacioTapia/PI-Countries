export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL';
export const GET_SEARCH_COUNTRIES = 'GET_SEARCH_COUNTRIES';
export const GET_COUNTRIES_CONTINENT = 'GET_COUNTRIES_CONTINENT';
export const GET_COUNTRIES_ACTIVITY = 'GET_COUNTRIES_ACTIVITY';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION';
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

export const getCountryDetail = id => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/countries/${id}`);
      const countries = await response.json();
      return dispatch({ type: GET_COUNTRY_DETAIL, payload: countries });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getSearchCountry = name => {
  return async function (dispatch) {
    try {
      const response = await fetch(`/countries?name=${name}`);
      const countries = await response.json();
      return dispatch({ type: GET_SEARCH_COUNTRIES, payload: countries });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getCountriesByContinent = continent => {
  return { type: GET_COUNTRIES_CONTINENT, payload: continent };
};

export const getCountriesByActivity = activity => {
  return { type: GET_COUNTRIES_ACTIVITY, payload: activity };
};

export const sortByName = order => {
  return { type: SORT_BY_NAME, payload: order };
};

export const sortByPopulation = order => {
  return { type: SORT_BY_POPULATION, payload: order };
};
