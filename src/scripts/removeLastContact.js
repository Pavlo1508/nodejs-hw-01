import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
		const myContacts = [...contacts];
		if (myContacts.length > 0) {
			myContacts.pop();
			await writeContacts(myContacts);
		} else {
			return console.error('You do not have saved contacts');
		}
  	console.log('Last contact is deleted');
  } catch (error) {
    console.error('Error deleting the last contact:', error);
  }
};

removeLastContact();
