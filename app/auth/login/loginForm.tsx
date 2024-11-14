"use client"
import React, { useActionState, useState } from 'react'
import Loader from '@/app/components/Loader';
import { authenticate } from './actions';

type Props = {}
const LoginForm = (props: Props) => {
    const [loginType, setLoginType] = useState(true);
    const [errors, formAction, isPending] = useActionState(authenticate, undefined);

    return (
        <form name="loginForm" id="cForm" action={formAction}>
            <fieldset>
                <h2>Login</h2>
                <div className='mb-4'>
                    <span className='text-gray-600 hover:cursor-pointer hover:text-black duration-100' onClick={(e) => { e.preventDefault(); setLoginType(!loginType) }}>Login with {loginType ? "email" : "username"} instead</span>
                </div>
                <div className="form-field">
                    <input name="credential" type="text" id="credential" className={"full-width"} placeholder={"Your " + (loginType ? "Username" : "Email")} defaultValue="" />
                </div>
                <input type="hidden" name="loginType" value={loginType ? "username" : "email"} />
                <div className="form-field">
                    <input name="password" type="password" id="password" className={"full-width "} placeholder="Password" defaultValue="" />
                </div>
                <button type="submit" className="submit button-primary full-width-on-mobile" disabled={isPending}>{isPending ? <Loader /> : "Login"}</button>
            </fieldset>
            {errors?.error && <p className='cForm-error'>{errors.error}</p>}
        </form>
    )
}

export default LoginForm