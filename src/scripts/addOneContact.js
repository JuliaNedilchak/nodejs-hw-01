import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
