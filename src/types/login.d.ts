export enum roles {
    ADMIN = 'admin',
    USER = 'user',
}

export interface Login {
    id: string,
    name: string,
    role: roles
}

export const LoginEmptyState:Login = {
    id: '',
    name: '',
    role: ''
}