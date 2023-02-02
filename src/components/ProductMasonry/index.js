import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Exposure from "../Exposure";
import { Link } from "react-router-dom";


const ProductMasonry = ({ data }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="20px">
        {data && data.map((item) => {
          const { urls, id, title, user, blur_hash } = item
          return (
            <Link to={`/pdp/${id}`} key={`${id}${title}`}>
              <Exposure imgSrc={urls?.regular} userInfo={user} title={title} id={user?.id} blurHash={blur_hash} />
            </Link>
          )
        })}
      </Masonry>
    </ResponsiveMasonry>
  )
}

export default ProductMasonry;