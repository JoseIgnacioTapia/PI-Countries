import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../redux/actions';

function Form() {
  const countries = useSelector(state => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const [activity, setActivity] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  });

  const [disableButton, setdisableButton] = useState(true);

  const handleChange = e => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountries = e => {
    setActivity({
      ...activity,
      countries: [...new Set([...activity.countries, e.target.value])],
    });
  };

  const handleSubmit = e => {};

  const validation = data => {};

  return (
    <div>
      <h3>Create Activity</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={activity.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="difficulty">Dificultad:</label>
          <input
            type="number"
            min="1"
            max="5"
            name="difficulty"
            value={activity.difficulty}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="duration">Duración:</label>
          <input
            type="text"
            name="duration"
            value={activity.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="season">Temporada:</label>
          <select name="season" defaultValue="default" onChange={handleChange}>
            <option value="default">Elegir temporada</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Invierno</option>
            <option>Primavera</option>
            <option>Todo el año</option>
          </select>
        </div>
        <div>
          <label htmlFor="country">Paises:</label>
          <select
            name="countries"
            defaultValue="default"
            onChange={handleCountries}
          >
            <option value="default">Elegir paises</option>
            {countries?.map(country => (
              <option value={country.name} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={disableButton ? false : true}>
          Crear
        </button>
      </form>
    </div>
  );
}

export default Form;
