import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactList, Search } from './components';
import { Container } from 'semantic-ui-react';

const SampleContacts = [
  {
    id: 1,
    firstName: 'Ash',
    lastName: 'Ketchum',
    address: '123 Mr. Mime Rd',
    city: 'Pallet Town',
    state: 'Kanto',
    zip: 15151,
    phoneNumber: '(111) 222-3333',
    email: 'AshKetchum@pokemail.com',
    favorited: true,
  },
  {
    id: 2,
    firstName: 'Fugiat',
    lastName: 'Consequat',
    address: '234 Cupidatat St',
    city: 'Commodo',
    state: 'Irure',
    zip: 10110,
    phoneNumber: '(000) 987-6543',
    email: 'FugiatConsequat@loremmail.com',
    favorited: false,
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'The Builder',
    address: '1 Fixit Lane',
    city: 'Construction',
    state: 'Site',
    zip: 99999,
    phoneNumber: '(131) 232-3434',
    email: 'YesHeCan@btb.com',
    favorited: false,
  },
];

const AppWrapper = styled(Container)`
  height: 100%;
  width: 100%;
  padding: 3rem 0;

  .contact-list-wrapper {
    padding: 2rem 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`;

// TODO: add edit contact functionality

function App() {
  const [formVisible, setFormVisible] = React.useState(false);
  const [contactList, setContactList] = React.useState([...SampleContacts]);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [searchedContacts, setSearchedContacts] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState(null);
  
  return (
    <AppWrapper>
      <Search
        setFormVisible={setFormVisible}
        contactList={contactList}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
        setSearchedContacts={setSearchedContacts}
      />
      {formVisible &&
      <ContactForm
        formVisible={formVisible}
        setFormVisible={setFormVisible}
        contactList={contactList}
        setContactList={setContactList}
        isEditing={isEditing}
      />
      }
      <ContactList
        contactList={contactList}
        setContactList={setContactList}
        showFavorites={showFavorites}
        searchedContacts={searchedContacts}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setSelectedContact={setSelectedContact}
        setFormVisible={setFormVisible}
      />
    </AppWrapper>
  );
}

export default App;
