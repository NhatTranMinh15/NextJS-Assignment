import { z } from "zod";

export const loginSchema = z.object({
    credential: z.string().min(1, "Field must not be empty"),
    password: z.string().min(1, "Password must not be empty"),
    loginType: z.enum(["username", "email"]),

})