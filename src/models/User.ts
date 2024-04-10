import { UUID } from "crypto";

export interface User{
    id: UUID;
    name: string;
    surname: string
    email: string;
    password: string;
    emailconfirmed: boolean
} 