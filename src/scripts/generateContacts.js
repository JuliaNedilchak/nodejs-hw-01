import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
