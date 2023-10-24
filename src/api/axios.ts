import axios from "axios";

// export class Axios {
//    public interceptors: {
//        request: AxiosInterceptorManager<AxiosRequestConfig>;
//        response: AxiosInterceptorManager<AxiosResponse>;
//    } | undefined;
//     constructor(config: AxiosRequestConfig) {
//         return axios.create(config);
//     }
// }

const api = axios.create({
    baseURL: "http://localhost:5007/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");
        console.log("token", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const loginUser = async (credentials: ILoginCredentials) => {
    const response = await api.post<IToken>("/api/auth/login", JSON.stringify(credentials));
    sessionStorage.setItem("token", response.data.token);
}

export const getCurrentUser = async () => {
    const response = await api.get<IUser>("/api/users/me");
    return response.data;
}

export const logoutUser = async () => {
    await api.delete("/api/auth/logout");
}

export default api;