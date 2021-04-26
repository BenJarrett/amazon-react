import React, { useState } from 'react';
import addAuthor from './Helpers/Data/authorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    author_name: '',
    author_book: ''
  });
  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add author to firebase //
    addAuthor(author);
  };
  return (
    <>
    <div className='author-form'>
    <form
    id='addAuhtorForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <h2>New Author</h2>
    <label> Author Name: </label>
    <input
    name='author_name'
    type='text'
    placeholder='Enter Name'
    value={author.name}
    onChange={handleInputChange}
    ></input>
    <br/>
    <label> Book </label>
    <input
    name='book_title'
    type='text'
    placeholder='Title'
    value={author.book}
    onChange={handleInputChange}>
    </input>
    <br/>
    <button type='submit'>Submit</button>
    </form>
    </div>
  </>
  );
}
