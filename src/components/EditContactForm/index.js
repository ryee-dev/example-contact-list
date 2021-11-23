import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

const EditContactForm = (props) => {
  const { formVisible, setFormVisible, contactList, setContactList, isEditing, contact } = props;
  const { register, handleSubmit } = useForm();
  
  const [formData, setFormData] = React.useState(null);
  
  const handleOnSubmit = (data, error) => {
    if (isEditing) {
    
    } else {
      setContactList([...contactList, data]);
    }
    
    error.target.reset();
    setFormVisible(false);
  };
  
  React.useEffect(() => {
    if (isEditing) {
      setFormData(contact);
    }
  }, [isEditing, contact]);
  
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
                value={isEditing && formData.firstName}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="lastName">Last Name</label>
              <input
                placeholder="Last Name"
                {...register('lastName')}
                value={isEditing && formData.lastName}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="address">Address</label>
            <input
              placeholder="Address"
              {...register('address')}
              value={isEditing && formData.address}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="city">City</label>
              <input
                placeholder="City"
                {...register('city')}
                value={isEditing && formData.city}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="state">State</label>
              <input
                placeholder="State"
                {...register('state')}
                value={isEditing && formData.state}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="zip">Zip</label>
              <input
                type="number"
                placeholder="Zip"
                {...register('zip')}
                value={isEditing && formData.zip}
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
                value={isEditing && formData.phoneNumber}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                value={isEditing && formData.email}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label htmlFor="favorited">Favorite this contact</label>
            <input
              type="checkbox"
              {...register('favorited')}
              value={isEditing && formData.favorited}
            />
          </Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditContactForm;
