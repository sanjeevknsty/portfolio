import { useState, useEffect } from 'react';

const UseMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);
    // Set the initial state
    documentChangeHandler();
    mediaQueryList.addListener(documentChangeHandler);
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [query]);

  return matches;
};

export default UseMediaQuery;