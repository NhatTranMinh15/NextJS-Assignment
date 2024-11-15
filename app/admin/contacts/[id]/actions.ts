import { z } from "zod";
import { formSchema } from "./validation";
export const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {

        const formValues = {
            cName: formData.get("cName"),
            cEmail: formData.get("cEmail"),
            cWebsite: formData.get("cWebsite"),
            cMessage: formData.get("cMessage"),
        }
        const parseForm = await formSchema.parseAsync(formValues);
        // await addContact(contact, formData.get("cUser")?.toString() || "");
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