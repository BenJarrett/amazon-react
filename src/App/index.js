import React from 'react';
import firebase from 'firebase';
import firebaseConfig from '../Helpers/Data/apiKeys';
import AuthorForm from '../AuthorForm';
import BookForm from '../BookForm';
import './App.scss';

function App() {
  firebase.initializeApp(firebaseConfig);
  return (
    <div className='App'>
      <AuthorForm formTitle="New Author"/>
      <hr/>
      <BookForm formTitle="New Book"/>
    </div>
  );
}
export default App;
