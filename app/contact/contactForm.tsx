"use client"
import { useActionState } from 'react'
import Loader from '@/app/components/Loader';
import { handleFormSubmit } from './actions';
import { useSession } from 'next-auth/react';

type Props = {}
const ContactForm = ({ }: Props) => {
    const session = useSession();
    const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" });
    const errors = state?.error || {}
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
                <input type="hidden" name="cUser" value={session?.data?.user?.email || ""} />
                <button type="submit" className="submit button-primary full-width-on-mobile" disabled={isPending}>{isPending ? <Loader /> : "Submit"}</button>
                {errors.error && <p className='cForm-error'>{errors.error}</p>}
            </fieldset>
        </form>
    )
}

export default ContactForm