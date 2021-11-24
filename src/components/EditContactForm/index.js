import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

const EditContactForm = (props) => {
  const { formVisible, setFormVisible, contactList, setContactList, isEditing, contact } = props;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: contact.firstName,
      lastName: contact.lastName,
      address: contact.address,
      city: contact.city,
      state: contact.state,
      zip: contact.zip,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
      favorited: contact.favorited,
    },
  });
  
  const handleOnSubmit = (data, error) => {
    const contactId = contactList.findIndex((item) => item.id === contact.id);
    const contactExists = contactId > -1;
    
    if (contactExists) {
      console.log('contact updated');
      const updatedContacts = contactList.map((modified) => {
        return modified.id === contact.id ? contact : modified;
      });
      setContactList(updatedContacts);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    }
    
    error.target.reset();
    setFormVisible(false);
  };
  
  React.useEffect(() => {
    console.log(contact.id);
  }, [isEditing]);
  
  return (
    <Modal
      size="tiny"
      centered={false}
      open={formVisible}
      onClose={() => setFormVisible(false)}
      onOpen={() => setFormVisible(true)}
    >
      <Modal.Content>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="firstName">First Name</label>
              <input
                placeholder="First Name"
                {...register('firstName')}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                {...register('lastName')}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="address">Address</label>
            <input
              placeholder="Address"
              {...register('address')}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="city">City</label>
              <input
                placeholder="City"
                {...register('city')}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="state">State</label>
              <input
                placeholder="State"
                {...register('state')}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="zip">Zip</label>
              <input
                type="number"
                placeholder="Zip"
                {...register('zip')}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                placeholder="(000) 000-0000"
                {...register('phoneNumber')}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="favorited">Favorite this contact</label>
            <input
              type="checkbox"
              name="checkbox"
              value="favorited"
              {...register('favorited')}
            />
          </Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditContactForm;
