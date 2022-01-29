import { useState, useEffect } from "react";
import ActionFetchToilets from "../action/ActionFetchToilets";

const useNearestToilet = location => {
  const [error, setError] = useState(null);
  const [nearestToilets, setNearestToilets] = useState([]);
  const [ignoredToilets, setIgnoredToilets] = useState([]);

  const appendToIgnoredToilets = id => {
    setIgnoredToilets(value => [...value, id]);
  };

  useEffect(() => {
    ActionFetchToilets({location, ignoredToilets})
      .then(setNearestToilets)
      .catch(setError);
  }, [ignoredToilets, location]);

  const toilet = nearestToilets.filter(toilet => !ignoredToilets.includes(toilet.id))[0];

  return {
    appendToIgnoredToilets,
    error,
    toilet,
  };
};

export default useNearestToilet;
