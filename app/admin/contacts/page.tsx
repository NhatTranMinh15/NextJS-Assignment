import { fetchContact } from '@/app/api/contact/contact'
import Pagination from '@/app/components/Pagination';
import { Contact } from '@/app/models/Contact';
import Link from 'next/link';
import React from 'react'
import Table from './Table';

type Props = {}
export const revalidate = 10

export default async function Contacts(props: { searchParams?: Promise<{ search?: string; page?: string; }>; }) {
    const searchParams = await props.searchParams;

    const search = searchParams?.search || '';
    console.log(search);
    
    const tempPage = Number(searchParams?.page) || 1;
    const currentPage = tempPage > 0 ? tempPage : 1;
    const contacts = await fetchContact({ page: currentPage, size: 5, sort: "", search:search });
    const { content, currentPage: page, totalElements, totalPage } = contacts;

    return (
        <>
            <h1>Contacts</h1>
            <Table content={content}></Table>
            <Pagination totalPages={totalPage} currentPage={page} ></Pagination>
        </>
    )
}
