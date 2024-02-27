import axios from "axios";
import config from "./axios.config";

const api = axios.create(config);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

// Response interceptor for API calls
api.interceptors.response.use(
    (response) => {
        return response
    }, async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return api(originalRequest);
        }

        return Promise.reject(error);
    });

export const loginUser = async (credentials: ILoginCredentials) => {
    await api.post<IAuthenticateResult>("/api/auth/login", JSON.stringify(credentials));
}

export const logoutUser = async () => {
    await api.delete<IAuthenticateResult>("/api/auth/logout");
}

export const getCurrentUser = async () => {
    const response = await api.get<IUser>("/api/users/me");
    return response.data;
}

export const getProjectList = async () => {
    const response = await api.get<PagedItems<Project>>("/api/projects");
    return response.data;
}
// const refreshAccessToken = async (tokens: IAuthenticateResult) => {
//     await api.post<IAuthenticateResult>("/api/auth/refresh", JSON.stringify(tokens));
// }

export default api;