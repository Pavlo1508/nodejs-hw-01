import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
		const myContacts = [...contacts];
		const quantity = myContacts.length;
		return `You have ${quantity} saved contacts`;
  } catch (error) {
    console.error('Error displaying the quantity of contacts:', error);
  }
};

console.log(await countContacts());
