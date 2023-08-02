import { useEffect, useState } from "react";
import { RequestOptions, fetchAPI } from "../utils/api";

interface Response<T> {
    data: T | null;
    isLoading: boolean;
    error: any;
}

const initialResponse = { data: null, isLoading: true, error: null };

const useFetch = <T>(path: string, options?: RequestOptions) => {
    const [response, setResponse] = useState<Response<T>>(initialResponse)
    const [abortController, setAbortController] = useState<AbortController | null>(null)

    const fetchData = async () => {
        try {
            const data = await fetchAPI(path, { ...options, signal: abortController?.signal, })
            setResponse({ data, isLoading: false, error: null })
        } catch (error) {
            setResponse({ data: null, isLoading: false, error })
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        setAbortController(controller)
        return () => {
            abortController?.abort();
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, [path]);

    return { ...response, fetchData };
};

export default useFetch;