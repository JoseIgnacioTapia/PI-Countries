import {
  ERROR,
  GET_ALL_COUNTRIES,
  FILTER_BY_ACTIVITY,
  FILTER_BY_CONTINENT,
  GET_COUNTRY_DETAIL,
  GET_SEARCH_COUNTRIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  GET_ALL_ACTIVITIES,
} from './actions';
import { sortByName, sortByPopulation } from '../helpers/helper.js';

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: {},
  activities: [],
  allActivities: [],
  error: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
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

    case GET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        allActivities: action.payload,
      };

    case FILTER_BY_CONTINENT:
      const allCountries = state.allCountries;
      const continentFiltered =
        action.payload === 'default'
          ? allCountries
          : allCountries.filter(
              c => c.continent.toLowerCase() === action.payload.toLowerCase()
            );
      return {
        ...state,
        countries: continentFiltered,
      };

    case FILTER_BY_ACTIVITY:
      const allNewCountries = state.allCountries;
      const allActivities = state.allActivities;
      console.log(state.allCountries);
      const countriesActivityFiltered =
        action.payload === 'default'
          ? allNewCountries
          : allActivities.find(
              act => act.name.toLowerCase() === action.payload.toLowerCase()
            ).countries;
      return {
        ...state,
        countries: countriesActivityFiltered,
      };

    case SORT_BY_NAME:
      let sortedArr =
        action.payload === 'asc'
          ? state.countries.sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              else return 0;
            })
          : state.countries.sort((a, b) => {
              if (a.name < b.name) return 1;
              if (a.name > b.name) return -1;
              else return 0;
            });
      return {
        ...state,
        countries: sortedArr,
      };

    case SORT_BY_POPULATION:
      let sortedPop =
        action.payload === 'asc'
          ? state.countries.sort((a, b) => {
              return a.population - b.population;
            })
          : state.countries.sort((a, b) => {
              return b.population - a.population;
            });
      return {
        ...state,
        countries: sortedPop,
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
