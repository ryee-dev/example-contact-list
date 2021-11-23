import React from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;

  .button-margin {
    min-width: 138px;
    margin-left: 0.4rem;
  }
`;

const Search = (props) => {
  const { setFormVisible, showFavorites, setShowFavorites, setSearchedContacts, contactList } = props;
  
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const handleSearch = (e) => {
    const query = e.target.value;
    
    if (query.length !== 0) {
      const results = contactList.filter((contact) => {
        const fullName = contact.firstName + contact.lastName;
        
        return fullName.toLowerCase().includes(query.toLowerCase());
      });
      
      setSearchedContacts(results);
    } else {
      setSearchedContacts(contactList);
    }
    
    setSearchQuery(query);
  };
  
  return (
    <SearchWrapper>
      <Input iconPosition="left" placeholder="search contacts">
        <Icon name="search" />
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Input>
      <ButtonContainer>
        <Button primary onClick={() => setFormVisible(true)}>Add New Contact</Button>
        {showFavorites ?
          <Button className="button-margin" secondary onClick={() => setShowFavorites(false)}>Show All</Button> :
          <Button className="button-margin" secondary onClick={() => setShowFavorites(true)}>Show Favorites</Button>
        }
      </ButtonContainer>
    </SearchWrapper>
  );
};

export default Search;
