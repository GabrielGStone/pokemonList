import { useCallback } from "react";

const useRequest = () => {
  const get = useCallback(async (endpoint: string) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  }, []);

  return { get };
};

export default useRequest;
