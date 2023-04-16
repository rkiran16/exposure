import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../../images/exposure.png';
import { SearchBox } from '../SearchBox';

export const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="position-sticky">
      <nav className="navbar border-bottom bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
          <div>
            <ul className="navbar-nav flex-row justify-content-end flex-grow-1 pe-3">
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
          </div>
        </div>
      </nav>
      <SearchBox />
    </div>
  );
};
