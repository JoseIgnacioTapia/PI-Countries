import { useState } from 'react';
import { getSearchCountry } from '../../redux/actions';

function SearchForm({ handleSearch }) {
  const [countryInput, setCountryInput] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setCountryInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!countryInput) {
      setMessage('Debe ingresar el nombre del país');
      return;
    }

    getSearchCountry(countryInput);
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
        onChange={handleChange}
      />
      {message && <p>{message}</p>}
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default SearchForm;
