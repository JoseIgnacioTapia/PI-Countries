import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/actions';
import Loader from './ui/Loader';

function MainPage() {
  const dispatch = useDispatch();
  const countriesDefault = useSelector(state => state.countries);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      dispatch(getAllCountries());
      setLoading(false);
    }, 2000);
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {countriesDefault.length > 0
        ? countriesDefault.map(country => (
            <div key={country.id}>{country.name}</div>
          ))
        : null}
    </>
  );
}

export default MainPage;
