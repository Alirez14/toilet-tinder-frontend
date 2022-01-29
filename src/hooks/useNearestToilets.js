import { useState, useEffect } from "react";
import ActionFetchToilets from "../action/ActionFetchToilets";

const useNearestToilets = (ignoredToilets, location) => {
  const [error, setError] = useState(null);
  const [nearestToilets, setNearestToilets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const toilets = await ActionFetchToilets({ location, ignoredToilets });
        setNearestToilets(toilets);
      } catch (e) {
        setError(e);
      }
      // ...
    }
    fetchData();
  }, [ignoredToilets, location]);

  return {
    error,
    nearestToilets,
  };
};

export default useNearestToilets;
