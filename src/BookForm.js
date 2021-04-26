import React, { useState } from 'react';
import addBook from './Helpers/Data/authorData';

export default function BookForm() {
  const [book, setBook] = useState({
    book_name: '',
    author_name: ''
  });
  const handleInputChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add book to firebase //
    addBook(book);
  };
  return (
    <>
    <div className='book-form'>
    <form
    id='addBookForm'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
    <h2>New Book</h2>
    <label>Title: </label>
    <input
    name='book_title'
    type='text'
    placeholder='Add A Book'
    value={book.title}
    onChange={handleInputChange}
    ></input>
        <br/>
    <button type='submit'>Submit</button>
    </form>
    </div>
  </>
  );
}
