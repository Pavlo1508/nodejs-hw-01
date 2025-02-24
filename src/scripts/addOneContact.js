import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = [...contacts];
    newContacts.push(createFakeContact());await writeContacts(newContacts);
    console.log('Contact generated successfully');
  } catch (error) {
    console.error('Error generating contact:', error);
  }
};

addOneContact();
