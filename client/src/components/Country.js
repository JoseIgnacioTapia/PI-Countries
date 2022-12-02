import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetail } from '../redux/actions.js';

function Country() {
  const { id } = useParams();
  console.log(id);
  const countryDetail = useSelector(state => state.countryDetail);
  const error = useSelector(state => state.error);
  console.log(error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  return (
    <div>
      <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} />
      <h2>{countryDetail.name}</h2>
      <h3>{countryDetail.id}</h3>
      <h4>{countryDetail.capital}</h4>
      <h4>{countryDetail.subregion}</h4>
      <h4>{countryDetail.population} habitantes</h4>
      <h4>{countryDetail.area} km²</h4>

      {Object.keys(error).length !== 0 ? <p>Sucedió un problema</p> : null}
      {countryDetail.activities?.map(act => {
        return (
          <div key={act.id}>
            <h2>Actividades:</h2>
            <ul>
              <li>
                <div>
                  <h3>{act.name}</h3>
                  <h4>{act.season}</h4>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
