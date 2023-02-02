import { useState, useEffect, useCallback } from "react";

function useFetch(page, serviceName) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    setLoading(true);
    await serviceName({ page: page, perPage: 10 }).then(result => {
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
  }, [page, serviceName])

  useEffect(() => {
    sendQuery(page, serviceName)
  }, [sendQuery, page, serviceName])

  return { loading, error, list };
}

export default useFetch;