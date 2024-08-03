import axios, { CancelTokenSource } from "axios";
import { useEffect, useState } from "react";

interface FetchDataParams {
    [key: string]: any;
  }
  
  interface UseFetchDataResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
  }

export default function useFetchData<T>(url: string, params: FetchDataParams ={}): UseFetchDataResult<T>{
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.get<T>(url, {
                params,
                cancelToken: source.token
            });
            setData(response.data);
        }catch(error){

        }
    }finally{
        setIsLoading(false);
    }
  
});
};
