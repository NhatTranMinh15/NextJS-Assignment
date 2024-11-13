import { fetchContact } from '@/app/api/contact/contacts'
import React from 'react'

type Props = {}

const Contacts = async (props: Props) => {
  const contacts = await fetchContact({ page: 0, size: 100, sort: "" });
  console.log(contacts);
  
  return (
    <div>Contacts</div>
  )
}

export default Contacts