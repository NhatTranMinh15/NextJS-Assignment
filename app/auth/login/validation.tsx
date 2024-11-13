import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "Name must not be empty"),
    password: z.string().min(1, "Password must not be empty")
})