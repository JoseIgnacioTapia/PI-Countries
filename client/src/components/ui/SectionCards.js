import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import { getAllCountries } from '../../redux/actions';
import Paginado from '../Paginado';

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

  return (
    <div>
      <Paginado
        countriesPerPage={countriesPerPage}
        totalCountries={countriesState.length}
        paginado={paginado}
      />
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
