import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries } from '../redux/actions';
import { useForm } from '../hooks/useForm.js';

const initialForm = {
  name: '',
  difficulty: '',
  duration: '',
  season: '',
  countries: [],
};

const validationsForm = form => {
  let errors = {};

  if (
    !form.name.trim() ||
    !/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(form.name.trim())
  ) {
    errors.name =
      "El campo 'Nombre' es requerido y puede contener solo letras y espacios en blancos";
  }

  if (!form.difficulty || form.difficulty > 5 || form.difficulty < 1) {
    errors.difficulty = "El campo 'Dificultad' debe tener un valor entre 1 y 5";
  }

  if (!form.duration.trim()) {
    errors.duration = "El campo 'Duración' es requerido";
  }

  if (!form.season) {
    errors.season = "El campo 'Temporada' es requerido";
  }

  if (form.countries.length === 0) {
    errors.countries = 'Debe asignar la actividad al menos a un país';
  }

  return errors;
};

function Form() {
  const countries = useSelector(state => state.countries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleDeleteCountry,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Create Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="difficulty">Dificultad:</label>
          <input
            type="number"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.difficulty}
          />
          {errors.difficulty && <p>{errors.difficulty}</p>}
        </div>
        <div>
          <label htmlFor="duration">Duración:</label>
          <input
            type="text"
            name="duration"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.duration}
          />
          {errors.duration && <p>{errors.duration}</p>}
        </div>
        <div>
          <label htmlFor="season">Temporada:</label>
          <select
            name="season"
            defaultValue="default"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="default">Elegir temporada</option>
            <option>Verano</option>
            <option>Otoño</option>
            <option>Invierno</option>
            <option>Primavera</option>
            <option>Todo el año</option>
          </select>
          {errors.season && <p>{errors.season}</p>}
        </div>
        <div>
          <label htmlFor="country">Paises:</label>
          <select
            name="countries"
            defaultValue="default"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="default">Elegir paises</option>
            {countries?.map(country => (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.countries && <p>{errors.countries}</p>}
          <div>
            {form.countries?.map(c => {
              let obj = countries.find(el => el.id === c);
              console.log(obj);
              return (
                <div key={c}>
                  <h3>{obj.name}</h3>
                  <button onClick={() => handleDeleteCountry(c)}>X</button>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          disabled={Object.keys(errors).length < 1 ? false : true}
        >
          CREAR
        </button>
      </form>
      {loading && <p>Enviando...</p>}
      {response && <p>Los datos se enviaron correctamente</p>}
    </div>
  );
}

export default Form;
