import { useEffect } from 'react';
import unsplash from '../../service';
import { ProductList } from '../../components/ProductList';
import { useSelector, useDispatch } from 'react-redux';
import { saveHeroImg } from '../../store/homeSlice';

export const Home = () => {
  const heroImg = useSelector((state) => state.home.heroImage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (heroImg === '') {
      unsplash.photos
        .getRandom({ query: 'wallpapers' })
        .then((result) => {
          if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
          } else {
            // handle success here
            const photo = result.response?.urls?.full;
            dispatch(saveHeroImg(photo));
          }
        });
    }
  }, [heroImg, dispatch]);

  return (
    <>
      <div className="position-relative">
        <img
          src={heroImg}
          className="w-100 vh-100 object-fit-cover"
          alt="Hero"
        />
        <div className="d-flex w-auto flex-column animate__animated animate__bounce position-absolute top-50 start-50 translate-middle align-items-center justify-content-start">
          <h6 className="h2 mb-4">SELLING PHOTOS</h6>
          <h1 className="display-4 fw-bold mb-4">
            Make Cash With Your Camera
          </h1>
          <a
            href="#productList"
            className="btn btn-lg w-50  btn-danger"
          >
            EXPLORE MORE
          </a>
        </div>
      </div>
      <div id="productList" className="my-4">
        <ProductList />
      </div>
    </>
  );
};
