export interface UserLogin {
    name: string,
    password: string
}

export interface UserModel {
    id: number,
    userName: string,
    name: string,
    lastName: string,
    birthDate: string
}
export interface UserState {
    logged: boolean,
    user: Readonly<UserModel>
}