import { z } from "zod";

export const fromSchema = z.object({
    cName: z.string().min(1, "Name must not be empty"),
    cEmail: z.string().email({ message: "Invalid email address" }),
    cWebsite: z.string().url({ message: "Invalid URL" }),
    cMessage: z.string().min(1, "Message must not be empty")
})