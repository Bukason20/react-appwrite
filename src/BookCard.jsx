import React from "react";

const BookCard = ({ books }) => {
  return (
    <div>
      {books.map((book, id) => (
        <div>
          <p>{book.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
