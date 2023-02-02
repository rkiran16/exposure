import { useState, useEffect, useCallback } from "react";
import unsplash from "../service";


function useFetch(page, query) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    setLoading(true);
    await unsplash.search.getPhotos({ query: query, page: page, perPage: 10 }).then(result => {
      if (result.errors) {
        // handle error here
        setError(true)
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        const photo = result.response;
        setLoading(false);
        setList((prev) => [...prev, ...photo.results]);
      }
    });
  }, [page, query])

  useEffect(() => {
    sendQuery(page, query)
  }, [sendQuery, page, query])

  return { loading, error, list };
}

export default useFetch;