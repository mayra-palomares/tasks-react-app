const API_URL = import.meta.env.VITE_API_URL;

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
};

type Headers = Record<string, string>
export interface RequestOptions {
    method?: HttpMethod;
    headers?: Headers;
    body?: string;
    signal?: AbortSignal;
}

const getUrl = (path: string) => API_URL + path

export const fetchAPI = async (path: string, options?: RequestOptions) => {
    const url = getUrl(path)
    const fetchOptions: RequestOptions = {
        method: options?.method ?? HttpMethod.GET,
        headers: options?.headers ?? { "Content-Type": "application/json", },
        body: options?.body,
    }

    if (options?.signal) {
        fetchOptions.signal = options.signal;
    }

    const res = await fetch(url, fetchOptions);
    return await res.json();
}

export const get = async (path: string) => {
    return await fetchAPI(path);
}

export const post = async (path: string, body: object) => {
    const options: RequestOptions = {
        method: HttpMethod.POST,
        body: JSON.stringify(body)
    }
    return await fetchAPI(path, options);
}

export const put = async (path: string, body: object) => {
    const options: RequestOptions = {
        method: HttpMethod.PUT,
        body: JSON.stringify(body)
    }
    return await fetchAPI(path, options);
}

export const deleteById = async (path: string) => {
    const options: RequestOptions = {
        method: HttpMethod.DELETE
    }
    return await fetchAPI(path, options);
}