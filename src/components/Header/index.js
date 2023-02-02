import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i class="fa-solid me-3 fa-camera"></i>
          Exposures
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Exposures</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <div className="d-flex flex-row flex-lg-column align-items-center">
                    <i class="fa-solid fs-5 fa-house me-lg-2"></i>
                    <span>Home</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="orders">
                  <div className="d-flex flex-row flex-lg-column align-items-center">
                    <i class="fa-regular fs-5 fa-rectangle-list me-lg-2"></i>
                    <span>Orders</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  <div className="d-flex flex-row flex-lg-column align-items-center">
                    <i class="fa-solid fs-5 fa-cart-shopping me-lg-2"></i>
                    <span>Cart</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}