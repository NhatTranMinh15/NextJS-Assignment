import { getOneContact } from '@/app/api/contact/contact'
import { notFound } from 'next/navigation'
import React from 'react'
import ResponseForm from './ResponseForm'
import Link from 'next/link'

type Props = {
  params: Promise<{ id: string }>
}

const Page = async ({ params, }: Props) => {
  const id = (await params).id
  const contact = await getOneContact(id);

  if (!contact) {
    notFound();
  } else {

    return (
      <>
        <div className='flex'>
          <div className='basis-1/6'>
            <h2>Name</h2>
          </div>
          <div className='basis-5/6'>
            {contact.name}
          </div>
        </div>
        <div className='flex'>
          <div className='basis-1/6'>
            <h2>Email</h2>
          </div>
          <div className='basis-5/6'>
            <Link href={"mailto:" + contact.email}>
              {contact.email}
            </Link>
          </div>
        </div>
        <div className='flex'>
          <div className='basis-1/6'>
            <h2>Website</h2>
          </div>
          <div className='basis-5/6'>
            <Link href={contact.website} >
              {contact.website}
            </Link>
          </div>
        </div>
        <div className='flex max-h-[25vw]'>
          <div className='basis-1/6'>
            <h2>Message</h2>
          </div>
          <div className='basis-5/6 overflow-y-scroll'>
            {contact.message}
          </div>
        </div>
        <div className='mt-10'>

          <ResponseForm></ResponseForm>
        </div>
      </>

    )
  }
}
export default Page