import { Link } from "react-router-dom";

function Navbar({carrito}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
      <div className="container">
        <a className="navbar-brand ms-2" href="#">Pizzeria Mamma Mia </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto ps-2">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/register">Register</Link>
            <Link className="nav-item nav-link" to="/login">Login</Link>
            <Link to="/carrito">
              <button type="button" className="btn btn-primary">
                CARRITO <span className="badge badge-light">{carrito.length}</span>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )

}
export default Navbar;