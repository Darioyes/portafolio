export interface IEmail {
    name: string;
    email: string;
    message: string;
}

export interface IErrors {
    message: string;
    success: boolean;
    errors: IErrorsComplements;
}

export interface IErrorsComplements {
    name?: string[];
    email?: string[];
    message?: string[];
}
