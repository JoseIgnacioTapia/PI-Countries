import { useDispatch } from 'react-redux';
import { filterCountriesByContinent } from '../../redux/actions.js';

function SelectByContinent() {
  const dispatch = useDispatch();

  const handleSelect = e => {
    e.preventDefault();

    dispatch(filterCountriesByContinent(e.target.value));
  };

  return (
    <div>
      <select defaultValue="default" onChange={handleSelect}>
        <option value="default">Elija un continente</option>
        <option value="South America">Sudamérica </option>
        <option value="North America">Norteamérica </option>
        <option value="Europe">Europa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceanía</option>
      </select>
    </div>
  );
}

export default SelectByContinent;
