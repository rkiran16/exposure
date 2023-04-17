import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../images/exposure.png';
import { SearchBox } from '../SearchBox';

export const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="position-sticky shadow">
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link className="navbar-brand order-0" to="/">
            <div className="d-flex align-items-center animate__animated animate__slideInLeft">
              <img
                src={Logo}
                className="img-fluid me-3"
                width="50"
                height="50"
                alt="exposure"
              />
              <span>Exposures</span>
            </div>
          </Link>
          <ul className="navbar-nav order-1 order-md-2 flex-row justify-content-end">
            <li className="nav-item me-3">
              <Link
                className="nav-link active animate__animated animate__slideInRight"
                aria-current="page"
                to="/"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-solid mb-1 fs-5 fa-house"></i>
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link
                className="nav-link animate__animated animate__slideInRight"
                to="orders"
              >
                <div className="d-flex flex-column align-items-center">
                  <i class="fa-regular mb-1 fs-5 fa-rectangle-list"></i>
                  <span>Orders</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link animate__animated animate__slideInRight"
                to="cart"
              >
                <div className="d-flex flex-column align-items-center position-relative">
                  <i class="fa-solid fs-5 animate__animated animate__bounceIn animate__repeat-2 fa-cart-shopping mb-1"></i>
                  <span>Cart</span>
                  {cart.length > 0 && (
                    <span class="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                      <span class="visually-hidden">
                        unread messages
                      </span>
                    </span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
          <div className="mt-4 mt-md-0 flex-grow-1 order-2 order-md-1 mx-0 mx-md-4 animate__animated animate__slideInDown">
            <SearchBox />
          </div>
        </div>
      </nav>
    </div>
  );
};
