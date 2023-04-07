import { useCallback } from "react";
const axios = require("axios");

const useRequest = () => {
  const get = useCallback(async (endpoint: string) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (err: any) {
      return err.response?.data;
    }
  }, []);

  return { get };
};

export default useRequest;
