import { Blurhash } from "react-blurhash";

const Exposure = ({ imgSrc, userInfo, id, title, blurHash }) => {
  const { profile_image, name, for_hire } = userInfo
  return (
    <div key={`${id}${title}`} className="position-relative exposure_container">
      {imgSrc ? <img src={imgSrc} className="img-fluid" alt={title} /> : <Blurhash hash={blurHash} resolutionX={32}
        resolutionY={32}
        punch={1} />}
      <div className="position-absolute top-0 w-100 start-0 ms-3 mt-3 user_info">
        <img className="rounded-circle" src={profile_image?.medium} alt={name} />
        <div className="d-flex flex-column ms-2">
          <span className="text-light">{name}</span>
          {for_hire && <small className="text-light">Open to Hire <i class="ms-1 fa-solid fa-circle-check"></i></small>}
        </div>
      </div>
      <div className="position-absolute px-2  top-50 start-50 translate-middle btn-container">
        <button type="button" className="btn btn-danger">
          <i class="fa-solid fs-3 fa-eye"></i>
        </button>
      </div>
    </div>
  )
}


export default Exposure;