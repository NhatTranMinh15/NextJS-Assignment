'use client'
import { useSession } from 'next-auth/react';
import React, { useActionState } from 'react'
import { handleFormSubmit } from './actions';
import Loader from '@/app/components/Loader';

type Props = {}

const ResponseForm = (props: Props) => {
    // const session = useSession();
    const [state, formAction, isPending] = useActionState(handleFormSubmit, { error: "", status: "INITIAL" });
    const errors = state?.error || {}
    return (
        <form action={formAction}>
            <div className="message form-field">
                <textarea name="cResponse" id="cResponse" className={"full-width " + (errors.cResponse ? "mb-0" : "")} placeholder="Response" ></textarea>
                {errors.cResponse && <p className='cForm-error'>{errors.cResponse}</p>}
            </div>
            <button type="submit" className="submit button button-primary full-width-on-mobile" disabled={!isPending}>{isPending ? <Loader /> : "Submit"}</button>

        </form>
    )
}

export default ResponseForm