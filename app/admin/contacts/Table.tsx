import { Contact } from '@/app/models/Contact';
import Link from 'next/link';
import React from 'react'

type Props = {
    content: Contact[]
}
const headers = [
    { name: "Name", value: "name" },
    { name: "Email", value: "email" },
    { name: "Website", value: "website" },
    { name: "Message", value: "message" },
    { name: "Action", value: "action" },
]

function renderAction(model: Contact, header: string) {
    return <Link href={`contacts/${model.id}`}>Response</Link>
}
function switchValue(model: Contact, header: string) {
    const value = model[header];
    switch (header) {
        case "website":
            return <Link href={value}>{value}</Link>
        case "email":
            return <Link href={"mailto:" + value}>{value}</Link>
        case "action":
            return renderAction(model, header);
        default:
            return value
    }
}




const Table = ({ content }: Props) => {
    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {headers.map(h => {
                        return <th key={h.name}>{h.name}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {content.map(contact => {
                    return <tr key={contact.name + Math.random()}>
                        {
                            headers.map((header) => (
                                <td key={header.value + " " + contact.id + Math.random()} className='truncate max-w-40'>
                                    {switchValue(contact, header.value)}
                                </td>
                            ))
                        }
                    </tr>
                })}

            </tbody>
        </table>
    )
}

export default Table