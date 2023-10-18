
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