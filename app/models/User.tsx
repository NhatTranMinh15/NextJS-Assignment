export type User = {
    name: string,
    profileLink: string,
    about:string,
    socialLinks: { name: string, link: string }[],
}
export type UserComment = {
    name: string,
    profileLink: string,
}
export type UserCredential = {
    email: string,
    password: string,
    token:string,
}