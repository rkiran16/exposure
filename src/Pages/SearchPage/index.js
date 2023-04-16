import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef, useCallback } from 'react';
import useSearch from '../../hooks/useSearch';
import ProductMasonry from '../../components/ProductMasonry';

const SearchPage = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const { loading, error, list } = useSearch(page, query);
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
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="d-flex flex-column justify-content-center">
      <ProductMasonry data={list} />
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
};

export default SearchPage;
