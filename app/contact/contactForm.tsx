"use client"
import React, { useActionState, useState } from 'react'
import { fromSchema } from './validation';
import { z } from 'zod';
import Loader from '@/app/components/Loader';
import { authenticate } from '../auth/login/actions';

type Props = {}
const ContactForm = (props: Props) => {
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
            const formValues = {
                cName: formData.get("cName"),
                cEmail: formData.get("cEmail"),
                cWebsite: formData.get("cWebsite"),
                cMessage: formData.get("cMessage"),
            }
            await fromSchema.parseAsync(formValues);
            await authenticate(prevState, formData)
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>);
                return { ...prevState, error: "Validation failed", status: "ERROR" }
            }
            return { ...prevState, error: "Unexpected error occured", status: "ERROR" }
        } finally {

        }
    }
    const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" });

    return (
        <form name="cForm" id="cForm" action={formAction}>
            <fieldset>
                <div className="form-field">
                    <input name="cName" type="text" id="cName" className={"full-width " + (errors.cName ? "mb-0" : "")} placeholder="Your Name" defaultValue="" />
                    {errors.cName && <p className='cForm-error'>{errors.cName}</p>}
                </div>
                <div className="form-field">
                    <input name="cEmail" type="text" id="cEmail" className={"full-width " + (errors.cEmail ? "mb-0" : "")} placeholder="Your Email" defaultValue="" />
                    {errors.cEmail && <p className='cForm-error'>{errors.cEmail}</p>}
                </div>
                <div className="form-field">
                    <input name="cWebsite" type="text" id="cWebsite" className={"full-width " + (errors.cWebsite ? "mb-0" : "")} placeholder="Website" defaultValue="" />
                    {errors.cWebsite && <p className='cForm-error'>{errors.cWebsite}</p>}
                </div>
                <div className="message form-field">
                    <textarea name="cMessage" id="cMessage" className={"full-width " + (errors.cMessage ? "mb-0" : "")} placeholder="Your Message" ></textarea>
                    {errors.cMessage && <p className='cForm-error'>{errors.cMessage}</p>}
                </div>
                <button type="submit" className="submit button-primary full-width-on-mobile" disabled={isPending}>{isPending ? <Loader /> : "Submit"}</button>
            </fieldset>
        </form>
    )
}

export default ContactForm