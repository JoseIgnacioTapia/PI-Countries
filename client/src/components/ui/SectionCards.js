import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import { getAllCountries } from '../../redux/actions';

function SectionCards() {
  const countriesState = useSelector(state => state.countries);
  const error = useSelector(state => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  if (countriesState.length) {
    return countriesState.map(country => (
      <Link key={country.id} to={`/countries/${country.id}`}>
        <CountryCard
          flag={country.flag}
          name={country.name}
          continent={country.continent}
        />
      </Link>
    ));
  }
  if (Object.keys(error).length) {
    return <h3>{error.message}</h3>;
  } else {
    return <h3>Loading</h3>;
  }
}

export default SectionCards;
