import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>HOME</h2>
      <Link to="/countries">Ingresar</Link>
    </div>
  );
}

export default Home;
