function Navbar(){
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
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">Register</a>
              <a className="nav-item nav-link" href="#">Login</a>
              <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>  
    )

}
export default Navbar;