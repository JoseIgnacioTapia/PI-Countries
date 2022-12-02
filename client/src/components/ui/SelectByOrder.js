function SelectByOrder({ setOrderAlpha, setOrderPop, setCurrentPage }) {
  const handleSortAlpha = e => {
    e.preventDefault();
    setOrderAlpha(e.target.value);
    setCurrentPage(1);
  };

  const handleSortPop = e => {
    e.preventDefault();
    setOrderPop(e.target.value);
    setCurrentPage(1);
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
        <select onChange={handleSortPop}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </div>
    </div>
  );
}

export default SelectByOrder;
