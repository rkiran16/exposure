import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import moment from "moment";
import UserInfo from '../../components/UserInfo';
import StripeCheckoutBtn from '../../components/StripeCheckoutBtn';

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='container my-5'>
      <h1 className='my-4'>Shopping Cart</h1>
      <div className='row'>
        <div className='col-12 col-md-8'>
          {cart.map((item) => (
            <div className="card mb-3 animate__animated animate__fadeInLeft">
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={item?.urls?.full} className="img-fluid object-fit-cover" style={{ height: '200px' }} alt={item?.alt_description} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{item?.alt_description}</h5>
                    <p className="card-text"><small className="text-muted">{`Published : ${moment(item?.promoted_at).format("MMM Do YYYY")}`}</small></p>
                    <UserInfo userImg={item?.user?.profile_image?.medium} name={item?.user?.name} />

                  </div>
                </div>
                <div className='col-md-2'>
                  <div className='d-flex align-items-center justify-content-end py-2 px-3'>
                    <p className='fs-4 fw-bold'>$9.99</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cart && cart.length > 0 && <div className='col-12 col-md-4'>
          <div className='bg-light border p-3 animate__animated animate__slideInDown'>
            <>
              <div className='d-flex align-items-center justify-content-center mb-4'>
                <span className='fs-5'>{`Subtotal (${cart.length} items):`}</span>
                <span className='ms-3 fs-5 fw-bold'>{`$${(cart.length) * 9.99}`}</span>
              </div>
              <StripeCheckoutBtn price={(cart.length) * 9.99} />
            </>
            <Link to="/" className='btn btn btn-outline-secondary w-100'>
              Continue Shopping
            </Link>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Cart;