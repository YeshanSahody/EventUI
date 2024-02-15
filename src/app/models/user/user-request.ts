import { Role } from "./role";

export interface UserRequest {
    username: string,
    password: string,
    role: Role,
    email: string,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    phone: string,
    avatar: string
}
