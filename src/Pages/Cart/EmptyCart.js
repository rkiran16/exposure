import { Link } from 'react-router-dom';
import emptyCart from '../../images/empty-cart.png';

const EmptyCart = ({ pageName = 'Cart is' }) => {
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <img
        src={emptyCart}
        className="img-fluid"
        alt="Empty Cart"
        height="200"
        width="200"
      />
      <h1 className="display-3 mt-4 mb-4">{`Your ${pageName} Empty`}</h1>
      <h6 className="mb-4">
        {`Looks like you haven't added any photos to your ${pageName} yet`}
      </h6>
      <Link to="/" className="btn btn-warning text-uppercase w-25">
        {`add photos to ${pageName}`}
      </Link>
    </div>
  );
};

export default EmptyCart;
