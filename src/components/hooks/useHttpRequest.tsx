import { useState, useCallback } from "react";

type FetchRequest = {
  url: string;
  options?: RequestInit;
};

const useHttpRequest = () => {
  const [responseData, setResponseData] = useState<unknown | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<unknown | null>(null);

  const sendHttpRequest = useCallback(async ({ url, options }: FetchRequest) => {
    if (!url) return;

    setLoading(true);
    setFetchError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setResponseData(result);
    } catch (error: unknown) {
      setFetchError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: responseData,
    isLoading: loading,
    error: fetchError,
    sendHttpRequest,
  };
};

export default useHttpRequest;
