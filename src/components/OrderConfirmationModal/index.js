/* eslint-disable no-undef */
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationModal = () => {
  const navigate = useNavigate();
  const btnHandler = () => {
    var modal;
    var myModalEl = document.querySelector('#orderConfirmationModal');
    if (myModalEl) {
      modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance
    }

    modal.hide();
    setTimeout(() => {
      navigate('/orders');
    }, 1000);
  };
  return (
    <div
      class="modal fade"
      id="orderConfirmationModal"
      tabindex="-1"
      aria-labelledby="orderConfirmationModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="orderConfirmationModalLabel">
              Order Confirmation
            </h5>
          </div>
          <div class="modal-body">
            <p>
              Your Order has been placed.Please go to orders page to
              view status
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-warning"
              onClick={btnHandler}
            >
              Go to Orders Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
