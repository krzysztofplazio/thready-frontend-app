
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

interface IToken {
    token: string;
}

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
}