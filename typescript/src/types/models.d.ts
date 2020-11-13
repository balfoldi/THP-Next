export type UserRole = 'admin' | 'member';

export type User = {
    name: string,
    age: number,
    isLogged: boolean,
    role: UserRole,
};
