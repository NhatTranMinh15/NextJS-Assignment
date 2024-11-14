import { formSchema } from "./validation";
import getServerSession from "next-auth"
import { authConfig } from '@/auth.config';
import { addContact } from "../api/contact/contact";
import { z } from "zod";
import { User } from "../models/User";
import { Contact } from "../models/Contact";
export const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {

        const formValues = {
            cName: formData.get("cName"),
            cEmail: formData.get("cEmail"),
            cWebsite: formData.get("cWebsite"),
            cMessage: formData.get("cMessage"),
        }
        const parseForm = await formSchema.parseAsync(formValues);

        const contact: Contact = {
            name: parseForm.cName,
            email: parseForm.cEmail,
            website: parseForm.cWebsite,
            message: parseForm.cMessage,
            by: undefined
        }
        await addContact(contact, formData.get("cUser")?.toString() || "");
    } catch (error) {
        if (error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors;
            return { ...prevState, error: fieldErrors, status: "ERROR" }
        }
        console.log(error);
        
        return { ...prevState, error: { error: "Unexpected error occured" }, status: "ERROR" }
    } finally {

    }
}