import * as qs from "qs";
import { AxiosRequestConfig, ParamsSerializerOptions } from "axios";

export const apiConfig:AxiosRequestConfig = {
    withCredentials: true,
    timeout: 30000,
    baseURL: "http://localhost:5007/",
    headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    paramsSerializer: (params: ParamsSerializerOptions) => qs.stringify(params, { indices: false }),
}