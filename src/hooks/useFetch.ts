import { useEffect, useState } from "react";
import { RequestOptions, fetchData } from "../utils/api";

interface Response<T> {
    data: T | null;
    isLoading: boolean;
    error: any;
}

const initialResponse = { data: null, isLoading: true, error: null };

const useFetch = <T>(path: string, options?: RequestOptions): Response<T> => {
    const [response, setResponse] = useState<Response<T>>(initialResponse)
    const [abortController, setAbortController] = useState<AbortController | null>(null)
    useEffect(() => {
        const controller = new AbortController();
        setAbortController(controller)
        return () => {
            abortController?.abort();
        }
    }, [])

    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const data = await fetchData(path, { ...options, signal: abortController?.signal, })
                setResponse({ data, isLoading: false, error: null })
            } catch (error) {
                setResponse({ data: null, isLoading: false, error })
            }
        };

        fetchAPI();
    }, [path]);

    return response;
};

export default useFetch;