import React from 'react';

const Book = ({ img, author, title }) => {
  // onClick
  const clickHandler = () => {
    console.log('Added to cart');
  };

  return (
    <article
      className="book"
      // onMouseOver
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Add to Cart
      </button>
    </article>
  );
};

export default Book;
