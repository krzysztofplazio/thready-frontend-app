
interface IProject {
    id: number;
    name: string;
    status: IStatus;
}

interface IStatus {
    name: string;
    color: string;
}

interface IProjectTitle {
    id: number;
    text: string;
}

interface ILoginCredentials {
    username: string;
    password: string;
}

interface IAuthenticateResult {
    accessToken: string;
    refreshToken: string;
}

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: string;
}

interface IState {
    user: IUser;
    setUser: (user: IUser) => void;
}

type PagedItems<T> = {
    page: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
    items: T[],
}

type Project = {
    id: number,
    title: string,
    description: string,
    dueDate: Date,
    creator: string,
}