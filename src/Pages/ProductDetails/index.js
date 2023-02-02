import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import unsplash from '../../service';
import UserInfo from "../../components/UserInfo";
import RelatedCollection from '../../components/RelatedCollection';

export const ProductDetails = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    unsplash.photos.get({ photoId: productId }).then(result => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        console.log(photo);
        setProduct(photo);
      }
    });

  }, [productId])


  const ImageModal = (imgsrc, title) => {
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-capitalize" id="exampleModalLabel">{title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src={imgsrc} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    )
  }


  const PriceContainer = () => {
    const variations = ["small", "medium", "large"];
    return (
      <div className='p-4'>
        <h5 className='text-capitalize mb-3'>{alt_description}</h5>
        <div className='border px-3 mb-3'>
          {variations.map((variation, index) => (
            <div key={`${index}${variation}`} className={`form-check py-3 ${index !== 2 ? 'border-bottom' : undefined}`}>
              <input className="form-check-input" type="radio" name="priceRadios" id={`price${variation}`} checked={index === 0 ? true : false} value={variation} />
              <label className="form-check-label w-100" for={`price${variation}`}>
                <div className='d-flex justify-content-between'>
                  <span className='text-uppercase'>{variation}</span>
                  <span className='fw-bold'>$99.99</span>
                </div>
              </label>
            </div>
          ))}
        </div>
        <button type='button' className='btn btn-lg d-flex align-items-center text-uppercase w-100 justify-content-center btn-danger'>
          <i className="fa-solid fa-bag-shopping me-4"></i>
          Add To Bag
        </button>
      </div>
    )
  }

  const { urls, alt_description, downloads, views, user, tags, exif, promoted_at, likes, height, width, color, related_collections, location } = product;
  return (
    <>
      <div className='row g-0'>
        <div className='col-12 col-md-8'>
          <div className='p-4' style={{ backgroundColor: color }}>
            <div className='position-relative pdp-image-container'>
              <img src={urls?.full} alt={alt_description} className="img-fluid w-100" style={{ maxHeight: '600px', objectFit: "contain" }} />
              <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn expand-btn position-absolute top-50 start-50 translate-middle btn-danger'>
                <i class="fa-solid fs-5 fa-up-right-and-down-left-from-center"></i>
              </button>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-4 bg-light bg-gradient d-flex'>
          <div className='d-flex flex-column w-100'>
            {PriceContainer()}
            <div className='p-4 border-top bg-grey d-flex flex-column h-100 w-100'>
              <h5 className='mb-4'>DETAILS</h5>
              <Link className='d-inline-block text-decoration-none' to={`/user/${user?.username}`}>
                <UserInfo userImg={user?.profile_image?.medium} name={user?.name} for_hire={user?.for_hire} />
              </Link>
              <div className='d-flex flex-column mt-4'>
                <div className='d-flex flex-wrap'>
                  <p className='mb-2 me-3 fs-6 text-black'><i className="fa-solid me-3 fs-5 fa-calendar-day"></i><span>Published : </span>{moment(promoted_at).format("MMM Do YYYY")}</p>
                  <p className='mb-2 me-3 fs-6 text-black'><i className="fa-solid me-3 fs-5 fa-eye"></i><span>Views : </span>{views}</p>
                  <p className='mb-2 me-3 fs-6 text-black'><i className="fa-solid me-3 fs-5 fa-download"></i><span>Downloads : </span>{downloads}</p>
                  <p className='mb-2 me-3 fs-6 text-black'><i className="fa-sharp me-3 fa-solid fs-5 fa-thumbs-up"></i><span>Likes : </span>{likes}</p>
                  <p className='mb-2 me-3 fs-6 text-black'><i className="fa-solid me-3 fs-5 fa-ruler-combined"></i><span>Dimensions : </span>{width} x {height}</p>
                </div>
                {exif && <div className='mt-4'>
                  <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-4 fa-camera"></i>Shot With : {exif?.name}</p>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container my-4'>
        <div className='d-flex flex-column justify-content-center'>
          {tags && <>
            <h5>Related tags</h5>
            <div className='d-flex flex-wrap my-3'>
              {tags.map((tag) => {
                return (
                  <span className="badge p-2 text-bg-secondary me-2 my-2">{tag?.title}</span>
                )
              })}
            </div>
          </>}
          {related_collections && related_collections.results && <>
            <h5 className='my-4'>Related Collection</h5>
            <div className='row'>
              {related_collections.results.map((result) => (
                <div key={result.id} className='col-4'>{<RelatedCollection key={result.id} collection={result} />}</div>
              ))}
            </div>
          </>}
        </div>
      </div>
      {ImageModal(urls?.full, alt_description)}
    </>
  )
}

export default ProductDetails;