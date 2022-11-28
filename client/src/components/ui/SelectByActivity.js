import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllActivities,
  filterCountriesByActivity,
} from '../../redux/actions.js';

function SelectByActivity() {
  const activities = useSelector(state => state.allActivities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const handleSelect = e => {
    e.preventDefault();

    dispatch(filterCountriesByActivity(e.target.value));
  };

  return (
    <div>
      <select defaultValue="default" onChange={handleSelect}>
        <option value="default">Elegir actividad</option>
        {activities?.map(act => (
          <option value={act.name} key={act.id}>
            {act.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectByActivity;
