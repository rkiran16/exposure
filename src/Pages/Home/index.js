import { SearchBox } from "../../components/SearchBox";
import { useEffect } from "react";
import unsplash from "../../service";
import { ProductList } from "../../components/ProductList";
import { useSelector, useDispatch } from 'react-redux'
import { saveHeroImg } from "../../store/homeSlice";

export const Home = () => {
  const heroImg = useSelector((state) => state.home.heroImage);
  const dispatch = useDispatch()

  useEffect(() => {
    if (heroImg === "") {
      unsplash.photos.getRandom({ query: "wallpapers" }).then(result => {
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

  }, [heroImg, dispatch])

  return (
    <>
      <div className="position-relative">
        <img src={heroImg} className="w-100 vh-100" style={{ objectFit: "cover" }} alt="" />
        <SearchBox />
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5">
          <a href="#productList"><i class="fa-solid  fa-circle-chevron-down fs-1 text-danger mb-5"></i></a>
        </div>
      </div>
      <div id="productList" className="container my-4">
        <ProductList />
      </div>
    </>
  )
}