import { User } from "./User"

export type Contact = {
    [key: string]: any;
    name: string,
    email: string,
    website: string,
    message: string,
    by: User | undefined;
}
