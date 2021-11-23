import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactList, Search } from './components';
import { Container } from 'semantic-ui-react';
import { SampleContacts } from './data/sample-contacts';

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

function App() {
  const [formVisible, setFormVisible] = React.useState(false);
  const [contactList, setContactList] = React.useState([...SampleContacts]);
  const [showFavorites, setShowFavorites] = React.useState(false);
  const [searchedContacts, setSearchedContacts] = React.useState([]);
  
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
      />
      }
      <ContactList
        contactList={contactList}
        setContactList={setContactList}
        showFavorites={showFavorites}
        searchedContacts={searchedContacts}
        setFormVisible={setFormVisible}
      />
    </AppWrapper>
  );
}

export default App;
