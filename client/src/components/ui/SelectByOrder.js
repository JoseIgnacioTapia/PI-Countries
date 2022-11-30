import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortByName } from '../../redux/actions.js';

function SelectByOrder() {
  const [order, setOrder] = useState('');
  const dispatch = useDispatch();

  const handleSortAlpha = e => {
    e.preventDefault();
    dispatch(sortByName(e.target.value));
    setOrder('Ordered');
  };

  return (
    <div>
      <h3>Ordenar por:</h3>
      <div>
        <label>Orden albafetico</label>
        <select onChange={handleSortAlpha}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <label>Cantidad de población</label>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default SelectByOrder;
