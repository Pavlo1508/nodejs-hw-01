import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const empty = [];
		await writeContacts(empty);
		console.log('Contact list is clear!');
  } catch (error) {
    console.error('Error clearing contacts:', error);
  }
};

removeAllContacts();
