"use server"
import { users } from '@/app/lib/data';
import { Contact } from '@/app/models/Contact';
import { PageableModel, Page, emptyPage } from '@/app/models/General';
import { randomUUID } from 'crypto';
import fsPromises from 'fs/promises';

export async function fetchContact(pageable: PageableModel): Promise<Page<Contact>> {
    let { page, size } = pageable;
    page = page - 1
    const skip = page * size;
    const contacts: Contact[] = await readJSON("./app/lib/contacts.json");
    if (skip > contacts.length || size <= 0 || page < 0) {
        return await new Promise((resolve) => setTimeout(() => { resolve(emptyPage); }, 1000));
    }

    const take = (skip + size > contacts.length) ? contacts.length - skip : size;
    const result = contacts.slice(skip, skip + take);
    return {
        content: result,
        currentPage: parseInt((skip / size).toString()),
        totalElements: contacts.length,
        totalPage: parseInt((contacts.length / size).toString()) + 1
    }
}
export async function getOneContact(id: string): Promise<Contact | undefined> {
    const contacts: Contact[] = await readJSON("./app/lib/contacts.json");
    const contact = contacts.find(c => { return c.id === id })    
    return contact
}
export async function addContact(contact: Contact, email: string | null | undefined) {
    const user = users.find(u => { return u.email === email })
    contact.by = user;
    contact.id = randomUUID();
    let contacts = await readJSON("./app/lib/contacts.json");
    contacts = await writeJSON("./app/lib/contacts.json", contacts, contact);
}

async function readJSON(path: string) {
    const read = await fsPromises.readFile(path, "utf-8");
    const array: any[] = JSON.parse(read);
    return array
}

async function writeJSON(path: string, array: any[], value: any) {
    array.push(value);
    await fsPromises.writeFile("./app/lib/contacts.json", JSON.stringify(array, null, 2), {});
    return array;
}