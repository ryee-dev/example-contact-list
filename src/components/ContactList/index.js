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
    setIsEditing,
    setSelectedContact,
    setFormVisible,
  } = props;
  
  const [favoritedContacts, setFavoritedContacts] = React.useState([]);
  // const [selectedContact, setSelectedContact] = React.useState(null);
  
  const handleDeleteContact = (id) => {
    setContactList(contactList.filter(contact => contact.id !== id));
  };
  
  const handleEditContact = (id, contact) => {
    setIsEditing(true);
    setFormVisible(true);
    setSelectedContact(contact);
    
    // const editedContact = contactList.map(item => {
    //   if (id === contact.id) {
    //     return { ...item };
    //   }
    // });
  };
  
  React.useEffect(() => {
    let filteredContacts = contactList.filter((contact => contact.favorited));
    setFavoritedContacts(filteredContacts);
  }, [contactList, showFavorites]);
  
  return (
    <Card.Group className="contact-list-wrapper" itemsPerRow={3}>
      {showFavorites ? favoritedContacts.map((fav) => (
        <ContactDetails
          key={uuidv4()}
          id={fav.id}
          contact={fav}
          handleDeleteContact={handleDeleteContact}
          handleEditContact={handleEditContact}
          {...props}
        />
      )) : null}
      
      {searchedContacts.length !== 0 ? searchedContacts.map((contact) => (
        <ContactDetails
          key={uuidv4()}
          id={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
          handleEditContact={handleEditContact}
          {...props}
        />
      )) : null}
      
      {!showFavorites && searchedContacts.length === 0 ? contactList.map((contact) => (
        <ContactDetails
          key={uuidv4()}
          id={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
          handleEditContact={handleEditContact}
          {...props}
        />
      )) : null}
    </Card.Group>
  );
};

export default ContactList;
