import React from 'react';
import { Card, Icon, Rating } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  .content {
    position: relative;
    z-index: 1;
  }

  .favorite {
    position: absolute;
    top: 0;
    right: 0;
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
  const { contact, setContactList, contactList } = props;
  const [showDetails, setShowDetails] = React.useState(false);
  
  const handleDeleteContact = (id) => {
    setContactList(contactList.filter(contact => contact.id !== id));
  };
  
  return (
    <>
      <StyledCard raised={showDetails}>
        <Rating className="favorite" icon="heart" defaultRating={0} maxRating={1} />
        {showDetails ?
          <Card.Content className="content" onClick={() => setShowDetails(!showDetails)}>
            <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>
            <Card.Meta>{contact.address}</Card.Meta>
            <Card.Meta>{contact.city}, {contact.state}, {contact.zip}</Card.Meta>
            <Card.Description>{contact.phoneNumber}</Card.Description>
            <Card.Description>{contact.email}</Card.Description>
            <Icon.Group className="icons-wrapper">
              <Icon onClick={() => handleDeleteContact(contact.id)} className="card-icon" name="remove user" color="red" />
              <Icon className="card-icon" name="edit" color="orange" />
            </Icon.Group>
          </Card.Content> :
          <Card.Content className="content" onClick={() => setShowDetails(!showDetails)}>
            <Card.Header>{contact.lastName}, {contact.firstName}</Card.Header>
            <Card.Meta>{contact.city}, {contact.state}</Card.Meta>
          </Card.Content>
        }
      </StyledCard>
    </>
  );
};

export default ContactDetails;
