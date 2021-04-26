import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbURL = firebaseConfig.databaseURL;

const addBook = (book) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/books.json`, book)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios
        .patch(`${dbURL}/books/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Book Added', book)));
    })
    .catch((error) => reject(error));
});
export default addBook;
