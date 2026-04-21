import { Link } from "react-router-dom";
import "./../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>URBAN THREADS</h2>

      <div className="nav-links">
        <Link to="/" className="active">Inicio</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}

export default Navbar;