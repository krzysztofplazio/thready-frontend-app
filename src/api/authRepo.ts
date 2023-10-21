import { AxiosError } from "axios";
import { Api } from "./api";

export class AuthRepo extends Api {
    public loginUser = async (credentials: ILoginCredentials) => {
        try {
            const response = await this.post<IToken, string>("/api/auth/login", JSON.stringify(credentials));
            this.setToken(response.data.token);
            sessionStorage.setItem("token", response.data.token);
        } catch (error)  {
            if (!(error instanceof AxiosError)){
                throw error;
            }

            switch (error.status) {
                case 404:
                    throw new Error(`User ${credentials.username} have no access to application.`);
                case 400:
                    throw new Error("Bad login or password");
                default: 
                    throw new Error("Server error");
            }
        }
    }
}

export const authRepo = new AuthRepo();
