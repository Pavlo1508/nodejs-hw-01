import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    const myContacts = [...contacts];
		console.log('Contacts displayed successfully');
		return myContacts;
  } catch (error) {
    console.error('Error displaying contacts:', error);
  }
};

console.log(await getAllContacts());
