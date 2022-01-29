import { useState, useEffect } from "react";
import ActionFetchToilets from "../action/ActionFetchToilets";

const useNearestToilets = function (ignoredToilets, location) {
  const [error, setError] = useState(null);
  const [nearestToilets, setNearestToilets] = useState([]);

  useEffect(() => {
    ActionFetchToilets({ location, ignoredToilets })
      .then((toilets) => setNearestToilets(toilets))
      .catch((error) => setError(error));
  }, [ignoredToilets, location]);

  return {
    error,
    nearestToilets,
  };
};

export default useNearestToilets;
