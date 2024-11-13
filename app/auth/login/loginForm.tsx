"use client"
import React, { useActionState} from 'react'
import Loader from '@/app/components/Loader';
import { authenticate } from './actions';

type Props = {}
const LoginForm = (props: Props) => {
    const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
    console.log(errorMessage);

    return (
        <form name="loginForm" id="cForm" action={formAction}>
            <fieldset>
                <div className="form-field">
                    <input name="email" type="text" id="email" className={"full-width "} placeholder="Your Email" defaultValue="" />
                </div>
                <div className="form-field">
                    <input name="password" type="password" id="password" className={"full-width "} placeholder="Password" defaultValue="" />
                </div>
                <button type="submit" className="submit button-primary full-width-on-mobile" disabled={isPending}>{isPending ? <Loader /> : "Login"}</button>
            </fieldset>
            <p>{errorMessage}</p>
        </form>
    )
}

export default LoginForm