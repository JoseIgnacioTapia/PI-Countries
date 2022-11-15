import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/countries" activeClassName="selected">
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/Form" activeClassName="selected">
              Formulario
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
