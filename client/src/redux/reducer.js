import {
  ERROR,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_ACTIVITY,
  GET_COUNTRIES_CONTINENT,
  GET_COUNTRY_DETAIL,
  GET_SEARCH_COUNTRIES,
  sortByName,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
} from './actions';
import { sortByName, sortByPopulation } from '../helpers/helper.js';

const initialState = {
  countries: [],
  countryDetail: {},
  error: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_SEARCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRIES_CONTINENT:
      return {
        ...state,
        countries: state.countries.filter(
          c => c.continent.toLowerCase() === action.payload.toLowerCase()
        ),
      };

    case GET_COUNTRIES_ACTIVITY:
      return {
        ...state,
        countries: state.countries.filter(country =>
          country.activities
            .map(activity => activity.name.toLowerCase())
            .includes(action.payload.toLowerCase())
        ),
      };

    case SORT_BY_NAME:
      return {
        ...state,
        countries: sortByName(action.payload, state.countries),
      };

    case SORT_BY_POPULATION:
      return {
        ...state,
        countries: sortByPopulation(action.payload, state.countries),
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
