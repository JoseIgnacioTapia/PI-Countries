import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import {
  getAllCountries,
  sortByName,
  sortByPopulation,
} from '../../redux/actions';
import Paginado from '../Paginado';
import SelectByOrder from './SelectByOrder';

function SectionCards() {
  const countriesState = useSelector(state => state.countries);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const indexOfLastCountry = currentPage * countriesPerPage - 1; // (2 * 10)-1 = 19
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // 19-10 = 9
  const currentCountries =
    currentPage === 1
      ? countriesState.slice(0, 9)
      : countriesState.slice(indexOfFirstCountry, indexOfLastCountry);

  const paginado = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const [orderAlpha, setOrderAlpha] = useState('');
  const [orderPop, setOrderPop] = useState('');
  const [newOrder, setNewOrder] = useState();

  useEffect(() => {
    if (orderAlpha !== '') {
      dispatch(sortByName(orderAlpha));
      setNewOrder(`Ordenado ${orderAlpha}`);
    }
    if (orderPop !== '') {
      dispatch(sortByPopulation(orderPop));
      setNewOrder(`Ordenado ${orderPop}`);
    }
  }, [dispatch, currentPage, orderAlpha, orderPop]);

  return (
    <div>
      <SelectByOrder
        setCurrentPage={setCurrentPage}
        setOrderAlpha={setOrderAlpha}
        setOrderPop={setOrderPop}
      />
      <Paginado
        countriesPerPage={countriesPerPage}
        totalCountries={countriesState.length}
        paginado={paginado}
      />
      {Object.keys(error).length !== 0 ? <p>Sucedió un problema</p> : null}
      {currentCountries.length ? (
        currentCountries.map(country => (
          <Link key={country.id} to={`/countries/${country.id}`}>
            <CountryCard
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          </Link>
        ))
      ) : (
        <p>Sin resultados</p>
      )}
    </div>
  );
}

export default SectionCards;
