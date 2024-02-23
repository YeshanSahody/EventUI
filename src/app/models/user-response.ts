import {Role} from './role';

export interface UserResponse{
    Id: BigInteger;
    UserName: string;
    Password: string;
    Email: string;
    role: Role;
    FirstName: string;
    LastName: string;
}