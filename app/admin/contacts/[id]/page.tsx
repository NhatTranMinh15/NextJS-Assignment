import { getOneContact } from '@/app/api/contact/contact'
import { notFound } from 'next/navigation'
import React from 'react'
import ResponseForm from './ResponseForm'

type Props = {
  params: Promise<{ id: string }>
}

const Page = async ({ params, }: Props) => {
  const id = (await params).id
  console.log(id);

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
            {contact.email}
          </div>
        </div>
        <div className='flex'>
          <div className='basis-1/6'>
            <h2>Website</h2>
          </div>
          <div className='basis-5/6'>
            {contact.website}
          </div>
        </div>
        <div className='flex max-h-80'>
          <div className='basis-1/6'>
            <h2>Message</h2>
          </div>
          <div className='basis-5/6'>
            {contact.message}
          </div>
        </div>
        <ResponseForm></ResponseForm>
      </>

    )
  }
}

export default Page