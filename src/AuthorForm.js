import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './Helpers/Data/authorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  // eslint-disable-next-line camelcase
  first_name,
  // eslint-disable-next-line camelcase
  last_name,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    // eslint-disable-next-line camelcase
    first_name: first_name || '',
    // eslint-disable-next-line camelcase
    last_name: last_name || '',
    firebaseKey: firebaseKey || null,
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add a student to firebase
    if (author.firebaseKey) {
      console.warn('You want to update this student');
      // make call to studentData to update student and rerender the DOM
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <div className='author-form'>
      <Form id='addAuthorForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input
            name='first_name'
            id='first_name'
            value={author.first_name}
            type='text'
            placeholder='Enter First Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input
            name='last_name'
            id='last_name'
            value={author.last_name}
            type='text'
            placeholder='Enter Last Name'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};
AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
