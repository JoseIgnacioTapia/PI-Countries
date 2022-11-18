function CountryCard({ flag, name, continent }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <img src={flag} alt="flag" />
      </div>
      <div>
        <h4>{continent}</h4>
      </div>
    </div>
  );
}

export default CountryCard;
