import React from 'react';

function Paginado({ countriesPerPage, totalCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i <= Math.floor(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {pageNumbers &&
          pageNumbers.map(number => {
            return (
              <li key={number} style={{ margin: '0 5px' }}>
                <button onClick={() => paginado(number)}>{number}</button>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}

export default Paginado;
