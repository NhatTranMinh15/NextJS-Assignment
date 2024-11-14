import React, { ReactNode, Suspense } from 'react'
import Loading from './loading'

type Props = {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <section id="content-wrap" className="blog-single">
            <div className="row">
                <div className="col-twelve">
                    <h1>Contacts</h1>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
            </div >
        </section >
    )
}

export default Layout