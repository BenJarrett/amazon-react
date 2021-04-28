import React, { useEffect, useState } from 'react';
import AuthorCard from '../AuthorCard';
import { getAuthors } from '../Helpers/Data/authorData';
import AuthorForm from '../AuthorForm';

function App() {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);
  return (
    <>
      <AuthorForm
      formTitle='Add Author'
      setAuthors={setAuthors}
      />
      <hr/>
      <div className="card-container">
        {authors.map((authorInfo) => (
          <AuthorCard
            key={authorInfo.firebaseKey}
            firebaseKey={authorInfo.firebaseKey}
            first_name={authorInfo.first_name}
            last_name={authorInfo.last_name}
            email={authorInfo.email}
            setAuthors={setAuthors}
          />
        ))};
      </div>
    </>
  );
}
export default App;
