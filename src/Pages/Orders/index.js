/* eslint-disable no-undef */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import moment from 'moment';
import UserInfo from '../../components/UserInfo';
import EmptyCart from '../Cart/EmptyCart';
import { emptyCart } from '../../store/cartSlice';
import { addToOrders } from '../../store/orderSlice';

export const Orders = () => {
  const orders = useSelector((state) => state.order);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToOrders(cart));
    dispatch(emptyCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (orders.length === 0) {
    return <EmptyCart pageName="Orders" />;
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="my-4">Your Orders</h1>
        <div className="row">
          <div className="col-12 col-md-8">
            {orders.map((item) => (
              <div className="card bg-light mb-3 animate__animated animate__fadeInLeft">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={item?.urls?.full}
                      className="img-fluid object-fit-cover"
                      style={{ height: '200px' }}
                      alt={item?.alt_description}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">
                        {item?.alt_description}
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">{`Published : ${moment(
                          item?.promoted_at
                        ).format('MMM Do YYYY')}`}</small>
                      </p>
                      <UserInfo
                        userImg={item?.user?.profile_image?.medium}
                        name={item?.user?.name}
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-center justify-content-end py-2 px-3">
                      <p className="fs-4 fw-bold">$9.99</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
