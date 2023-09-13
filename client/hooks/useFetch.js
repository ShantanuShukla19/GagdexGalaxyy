import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null); // Initialize with null instead of undefined
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  const makeApiCall = async () => {
    try {
      setLoading(true); // Set loading to true before making the API call
      setError(null); // Reset any previous errors

      const res = await fetchDataFromApi(endpoint);
      setData(res);
    } catch (err) {
      setError(err); // Set error state in case of API call failure
    } finally {
      setLoading(false); // Set loading to false after API call completion (success or failure)
    }
  };
  console.log(data);

  return { data, loading, error }; // Return loading and error states as well
};

export default useFetch;
