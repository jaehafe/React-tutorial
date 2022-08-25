import React from 'react';
import ReactDom from 'react-dom/client';
import { books } from './books';
import Book from './Book';
import './index.css';

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Booklist />);
