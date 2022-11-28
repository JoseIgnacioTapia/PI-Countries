import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchCountry } from '../../redux/actions';

function SearchBar() {
  const [countryInput, setCountryInput] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    setCountryInput(e.target.value);
    console.log(countryInput);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!countryInput) {
      setMessage('Debe ingresar el nombre del país');
      return;
    }

    dispatch(getSearchCountry(countryInput));
    setCountryInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="country"
        id="country"
        placeholder="País"
        value={countryInput}
        onChange={e => handleInputChange(e)}
      />
      {message && <p>{message}</p>}
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default SearchBar;
