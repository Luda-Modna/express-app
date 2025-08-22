const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const contactsDB = [
  {
    id: 0,
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isFavourite: false,
  },
  {
    id: 1,
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
];

class ContactsDB {
  constructor (arr) {
    this.contacts = [...arr];
  }

  createContact (newContact) {
    this.contacts.push({ ...newContact, id: uuidv4(), isFavourite: false });
    return this.contacts[this.contacts.length - 1];
  }

  getContacts () {
    return [...this.contacts];
  }
}

const contactsDbInstace = new ContactsDB(contactsDB);

module.exports = contactsDbInstace;
