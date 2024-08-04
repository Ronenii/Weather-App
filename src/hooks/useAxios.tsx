import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";

// A custom hook to use axios from anywhere in the code.
// use example:
// const [loading, data, error, request] = useAxios<ForecastJsonResponse>(
// { method: 'GET', url: 'BASE_URL/current.json?q='id:1104339'},
// false
// );

export default function useAxios<T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [boolean, T | undefined, string, () => void] {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState("");

  useEffect(() => {
    if (loadOnStart) sendRequest();
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = () => {
    setLoading(true);

    axios(config)
      .then((response) => {
        setError("");
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return [loading, data, error, request];
}
