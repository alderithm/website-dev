// Source: https://dev.to/link2twenty/react-custom-hook-for-media-queries-2bn4
import { useState, useEffect } from "react";

export default function useMediaQuery(initalQuery: string) {
    const [query, setQuery] = useState(initalQuery);
    const [matches, setMatches] = useState(false);
  
    // check query and listen for media change.
    useEffect(() => {
      if (!query) return;
  
      const _onChange = (mql: MediaQueryListEvent) => {
        setMatches(mql.matches);
      };
  
      const mql = window.matchMedia(query);
  
      setMatches(mql.matches);
  
      try {
        mql.addEventListener("change", _onChange);
      } catch {
        mql.addListener(_onChange);
      }
  
      return () => {
        try {
          mql.removeEventListener("change", _onChange);
        } catch {
          mql.removeListener(_onChange);
        }
      };
    }, [query]);
  
    return [matches, setQuery] as const;
  }
  