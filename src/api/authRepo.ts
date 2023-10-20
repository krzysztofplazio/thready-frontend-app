import { Api } from "./api";

export class AuthRepo extends Api {
    public loginUser = async (credentials: ILoginCredentials): Promise<string> => {
        try {
            const response = await this.post<string, string>("/api/auth/login", JSON.stringify(credentials));
            this.setToken(response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export const authRepo = new AuthRepo();
