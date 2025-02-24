import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
		const contacts = await readContacts();
    const newContacts = [...contacts];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
		}
		await writeContacts(newContacts);
    console.log('Contacts generated successfully');
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(100);
