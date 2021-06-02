import './index.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Book from './components/Book'


function App() {
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch('./books.json');
      console.log(response)
      const json = await response.json();
      console.log(json)
      setData(json);
      setLoaded(true);
    }
    getData();
  }, [])

  console.log('loaded:', loaded, 'data:', data);


  return (
    <div className="container">
      <h1>Books</h1>
      {loaded && data.books.map((book, i) =>
        <Book
          key={i}
          data={book} />
      )}
    </div>
  );
}

export default App
