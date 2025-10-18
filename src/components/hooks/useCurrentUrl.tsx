import { useLocation } from "react-router-dom";
import { useMemo } from "react";

const useCurrentUrl = (): string => {
  const location = useLocation();

  const currentUrl = useMemo(() => {
    return `${window.location.origin}${location.pathname}${location.search}${location.hash}`;
  }, [location]);

  return currentUrl;
};

export default useCurrentUrl;
