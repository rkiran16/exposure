import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import unsplash from '../../service';
import UserInfo from "../../components/UserInfo";

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

  const { urls, alt_description, downloads, views, user, tags, created_at, updated_at, likes, height, width, color } = product;
  return (
    <>
      <div className='py-3' style={{ backgroundColor: color }}>
        <div className='d-flex p-3 justify-content-between align-items-center'>
          <h5 className='text-capitalize text-light'>{alt_description}</h5>
          <button type='button' className='btn d-flex align-items-center justify-content-center btn-danger'>
            <i class="fa-solid fs-4 fa-cart-plus me-4"></i>
            Add To Bag
          </button>
        </div>
        <div className='position-relative'>
          <img src={urls?.full} alt={alt_description} className="img-fluid w-100" style={{ maxHeight: '600px', objectFit: "contain" }} />
        </div>
      </div>
      <div className="container">
        <div className='p-3'>
          <Link className='d-inline-block text-decoration-none' to={`/user/${user?.username}`}>
            <UserInfo userImg={user?.profile_image?.medium} name={user?.name} for_hire={user?.for_hire} />
          </Link>
          <div className='d-flex flex-column mt-2'>
            <div className='d-flex flex-wrap justify-content-even'>
              <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-5 fa-calendar-day"></i><span>Created : </span>{moment(created_at).format("MMM Do YYYY")}</p>
              <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-5 fa-calendar-day"></i><span>Updated : </span>{moment(updated_at, "YYYYMMDD").fromNow()}</p>
              <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-5 fa-eye"></i><span>Views : </span>{views}</p>
              <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-5 fa-download"></i><span>Downloads : </span>{downloads}</p>
              <p className='mb-2 me-3 fs-6 text-black'><span>Likes : </span>{likes}</p>
              <p className='mb-2 me-3 fs-6 text-black'><i class="fa-solid me-3 fs-5 fa-ruler-combined"></i><span>Dimensions : </span>{width} x {height}</p>
            </div>
          </div>
        </div>
        <div className='p-3'>

          {/* <div className='d-flex flex-wrap my-3'>
              {tags && tags.map((tag) => {
                return (
                  <span class="badge p-2 text-bg-secondary me-2 my-2">{tag?.title}</span>
                )
              })}
            </div> */}

        </div>
      </div>
    </>
  )
}

export default ProductDetails;