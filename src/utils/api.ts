const API_URL = import.meta.env.VITE_API_URL;

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

export interface RequestOptions {
    method?: HttpMethod;
    headers?: Record<string, string>;
    body?: string;
    signal?: AbortSignal;
}

const getUrl = (path: string) => API_URL + path

export const fetchData = async (path: string, options?: RequestOptions) => {
    const url = getUrl(path)
    const fetchOptions: RequestOptions = {
        method: options?.method ?? HttpMethod.GET,
        headers: options?.headers ?? {},
        body: JSON.stringify(options?.body),
    }

    if (options?.signal) {
        fetchOptions.signal = options.signal;
    }

    const res = await fetch(url, fetchOptions);
    return await res.json();
}

export const get = async (url: string) => {
    return await fetchData(url);
}