import React, { useState } from 'react';
import './App.css'
function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!query.trim()) {
      setError('Please enter a search query.');
      return;
    }

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setBooks(data.items);
        setError('');
      } else {
        setBooks([]);
        setError('No books found for the given query.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
    setClicked(true);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    setError('');
  };

  return (
    <>
    <br/><br/>
    <div>
     
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <br/>
      <br/>
      {clicked && (
        <div className='div'>
          {error && <p>{error}</p>}
          {books.map((book) => (
            <div key={book.id}>
               <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              <h2>{book.volumeInfo.title}</h2>
              <p> {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
             
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default BookSearch;
