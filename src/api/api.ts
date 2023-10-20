import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";
import { apiConfig } from "./api.config";

export class Api {
    private token: string;
    private config: AxiosRequestConfig;
    public constructor () {
        this.token="";
        this.config = apiConfig;
    }

    public getToken = (): string => {
        return `Bearer ${this.token}`;
    }

    public setToken = (token: string): void => {
        this.token = token;
    }

    public getUri = (): string => {
        return axios.getUri(this.config);
    }

    public request = <T, R = AxiosResponse<T>>(
    ): Promise<R> => {
        return axios.request(this.config);
    }

    public get = <T, R = AxiosResponse<T>>(
        url: string,
    ): Promise<R> => {
        return axios.get (url, this.config);
    }

    public options = <T, R = AxiosResponse<T>>(
        url: string,
    ): Promise<R> => {
        return axios.options (url, this.config);
    }
    
    public delete = <T, R = AxiosResponse<T>>(
        url: string,
    ): Promise<R> => {
        return axios.delete (url, this.config);
    }

    public head = <T, R = AxiosResponse<T>>(
        url: string,
    ): Promise<R> => {
        return axios.head (url, this.config);
    }

    public post = <T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
    ): Promise<R> => {
        return axios.post (url, data, this.config);
    }

    public put = <T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
    ): Promise<R> => {
        return axios.put (url, data, this.config);
    }

    public patch = <T, B, R = AxiosResponse<T>>(
        url: string,
        data?: B,
    ): Promise<R> => {
        return axios.patch (url, data, this.config);
    }

    public success = <T>(response: AxiosResponse<T>): T => {
        return response.data;
    }

    public error = <T> (error: AxiosError<T>): void => {
        throw error;
    }
}