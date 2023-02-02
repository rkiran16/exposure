import { useEffect, useState, useCallback, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import unsplash from "../../service";
import ProductMasonry from "../ProductMasonry";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const serviceName = unsplash.photos.list;
  const { loading, error, list } = useFetch(page, serviceName);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);



  return (
    <div>
      <ProductMasonry data={list} />
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  )
}