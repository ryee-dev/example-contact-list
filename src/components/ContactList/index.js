import React from 'react';
import { Card } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { ContactDetails } from '../../components';

const ContactList = (props) => {
  const {
    contactList,
    showFavorites,
    searchedContacts,
    setContactList,
    isEditing,
    setIsEditing,
    setSelectedContact,
    setFormVisible,
  } = props;
  const [favoritedContacts, setFavoritedContacts] = React.useState([]);
  
  React.useEffect(() => {
    let filteredContacts = contactList.filter((contact => contact.favorited));
    setFavoritedContacts(filteredContacts);
  }, [contactList, showFavorites]);
  
  return (
    <Card.Group className="contact-list-wrapper" itemsPerRow={4} stackable>
      {showFavorites ? favoritedContacts.map((fav) => (
        <ContactDetails
          key={uuidv4()}
          contact={fav}
          setContactList={setContactList}
          contactList={contactList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSelectedContact={setSelectedContact}
          setFormVisible={setFormVisible}
        />
      )) : null}
      
      {searchedContacts.length !== 0 ? searchedContacts.map((contact) => (
        <ContactDetails
          key={uuidv4()}
          contact={contact}
          setContactList={setContactList}
          contactList={contactList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSelectedContact={setSelectedContact}
          setFormVisible={setFormVisible}
        />
      )) : null}
      
      {!showFavorites && searchedContacts.length === 0 ? contactList.map((contact) => (
        <ContactDetails
          key={uuidv4()}
          contact={contact}
          setContactList={setContactList}
          contactList={contactList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          setSelectedContact={setSelectedContact}
          setFormVisible={setFormVisible}
        />
      )) : null}
    </Card.Group>
  );
};

export default ContactList;
