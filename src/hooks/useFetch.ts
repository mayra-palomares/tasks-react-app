import { useEffect, useState } from "react";

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

const API_URL = import.meta.env.VITE_API_URL;

const getUrl = (path: string) => API_URL + path

const useFetch = <T>(path: string, options?: RequestOptions) => {
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const url = getUrl(path)

        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    signal: abortController.signal,
                    method: options?.method ?? HttpMethod.GET,
                    headers: options?.headers ?? {},
                    body: JSON.stringify(options?.body),
                });
                const data = await res.json();
                setResponse(data);
            } catch (err) {
                setError(error)
            }
        };

        fetchData();
        return () => {
            abortController.abort();
        }
    }, []);

    return { response, error };
};

export default useFetch;