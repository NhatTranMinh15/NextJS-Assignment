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