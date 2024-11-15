import { TLink } from "./General"

export type User = {
    name: string,
    username: string
    email: string,
    profileLink: string,
    about: string,
    socialLinks: TLink[],
    password: string,
    isAdmin:boolean,
}
export type UserComment = {
    name: string,
    profileLink: string,
}
