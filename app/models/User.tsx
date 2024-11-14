export type User = {
    name: string,
    username: string
    email: string,
    profileLink: string,
    about: string,
    socialLinks: { name: string, link: string }[],
    password: string,
}
export type UserComment = {
    name: string,
    profileLink: string,
}
