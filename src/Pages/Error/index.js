import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-body-dark vh-100">
      <div>
        <h1 className="display-1 mb-3">404</h1>
        <h6 className="text-uppercase mb-3">YOU'RE BEYOND THE BORDERS</h6>
        <Link to="/" type="button" className="btn btn-outline-secondary">TAKE ME HOME</Link>
      </div>
    </div>
  )
}


export default Error;