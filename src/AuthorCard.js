/* eslint-disable camelcase */
import { React, useState } from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import AuthorForm from './AuthorForm';
import { deleteAuthor } from './Helpers/Data/authorData';

const AuthorCard = ({
  firebaseKey,
  // eslint-disable-next-line camelcase
  first_name,
  // eslint-disable-next-line camelcase
  last_name,
  setAuthors,
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card body>
      <CardTitle tag="h5">{first_name}</CardTitle>
      {/* // eslint-disable-next-line camelcase */}
      <CardText>{last_name}</CardText>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
      <br/>
      <Button color="info" onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Author'}
      </Button>

      {
      editing && <AuthorForm
        formTitle='Edit Author'
        setAuthors={setAuthors}
        firebaseKey={firebaseKey}
        first_name={first_name}
        last_name={last_name}
       />
       }
    </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};
export default AuthorCard;
