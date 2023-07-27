import { useEffect, useState } from "react";


const API_URL = import.meta.env.VITE_API_URL;
const getUrl = (path: string) => API_URL + path

enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

interface RequestOptions {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: object;
}

interface Response<T> {
    data: T | null;
    isLoading: boolean;
    error: any;
}

const initialResponse = { data: null, isLoading: true, error: null };

const useFetch = <T>(path: string, options?: RequestOptions) => {
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
        const url = getUrl(path)

        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    signal: abortController?.signal,
                    method: options?.method ?? HttpMethod.GET,
                    headers: options?.headers ?? {},
                    body: JSON.stringify(options?.body),
                });
                const data = await res.json();
                setResponse({ data, isLoading: false, error: null })
            } catch (error) {
                setResponse({ data: null, isLoading: false, error })
            }
        };

        fetchData();
    }, [path]);

    return response;
};

export default useFetch;