import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';
import styled from 'styled-components';
import { EditContactForm } from '../../components';

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  min-width: 212px;

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-content {
    position: relative;
    z-index: 1;
  }

  .favorite {
    position: absolute;
    top: 0;
    right: 0;
    //margin: -1rem -1rem 0 0;
    padding: 1rem;
    z-index: 2;
  }

  .icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
    max-width: 65px;
  }

  .card-icon {
    position: relative;
    display: block;
    font-size: 12px;
    margin: 0;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
    z-index: 2;

    &:hover {
      opacity: 1;
    }
  }
`;

const ContactDetails = (props) => {
  const { contact, isEditing, handleDeleteContact, handleEditContact, selectedContact } = props;
  // const [contactDetails, setContactDetails] = React.useState(null);
  const [showDetails, setShowDetails] = React.useState(false);
  // const [editedContact, setEditedContact] = React.useState(null);
  
  // const handleDeleteContact = (id) => {
  //   setContactList(contactList.filter(contact => contact.id !== id));
  // };
  //
  // const handleEditContact = (contact) => {
  //   setIsEditing(true);
  //   setFormVisible(true);
  //   setSelectedContact(contact);
  // };
  
  // const handleFavorite
  
  return (
    <>
      <StyledCard raised={showDetails}>
        <Rating
          className="favorite"
          icon="heart"
          defaultRating={contact.favorited ? 1 : 0}
          maxRating={1}
          // onRate={set}
        />
        {showDetails ?
          <Card.Content className="card-content" onClick={() => setShowDetails(!showDetails)}>
            <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>
            <Card.Meta>{contact.address}</Card.Meta>
            <Card.Meta>{contact.city}, {contact.state}, {contact.zip}</Card.Meta>
            <Card.Description>{contact.phoneNumber}</Card.Description>
            <Card.Description>{contact.email}</Card.Description>
            <Icon.Group className="icons-wrapper">
              <Icon onClick={() => handleDeleteContact(contact.id)} className="card-icon" name="remove user" color="red" />
              <Icon onClick={() => handleEditContact(contact.id, { ...contact })} className="card-icon" name="edit" color="orange" />
            </Icon.Group>
          </Card.Content> :
          <Card.Content className="card-content" onClick={() => setShowDetails(!showDetails)}>
            <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>
            <Card.Meta>{contact.city}, {contact.state}</Card.Meta>
          </Card.Content>
        }
      </StyledCard>
      {isEditing &&
      <EditContactForm
        {...props}
        contact={contact}
      />}
      
      {/*{showDetails ?*/}
      {/*  <StyledCard raised fluid onClick={() => setShowDetails(!showDetails)}>*/}
      {/*    <Card.Content>*/}
      {/*      <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>*/}
      {/*      <Card.Meta>{contact.address}</Card.Meta>*/}
      {/*      <Card.Meta>{contact.city}, {contact.state}, {contact.zip}</Card.Meta>*/}
      {/*      <Card.Description>{contact.phoneNumber}</Card.Description>*/}
      {/*      <Card.Description>{contact.email}</Card.Description>*/}
      {/*    </Card.Content>*/}
      {/*  </StyledCard> :*/}
      {/*  <StyledCard fluid onClick={() => setShowDetails(!showDetails)}>*/}
      {/*    <Card.Content>*/}
      {/*      <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>*/}
      {/*      <Card.Meta>{contact.city}, {contact.state}</Card.Meta>*/}
      {/*    </Card.Content>*/}
      {/*  </StyledCard>*/}
      {/*}*/}
    </>
  );
};

export default ContactDetails;
