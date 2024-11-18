import React from 'react'
import LoginForm from './loginForm'
import { SessionProvider } from 'next-auth/react'

type Props = {}

const Page = (props: Props) => {  
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <LoginForm></LoginForm>
        </div>
      </div>
    </section>
  )
}

export default Page