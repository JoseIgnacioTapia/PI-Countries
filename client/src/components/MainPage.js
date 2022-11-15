import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/actions';

function MainPage() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  if (countries.length) {
    return (
      <>
        {countries.map(country => (
          <div key={country.id}>{country.name}</div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }
}

export default MainPage;
