import React from "react";
import BookCard from "./BookCard";

const BookLibrary = ({ books }) => {
  return (
    <div>
      <BookCard books={books} />
    </div>
  );
};

export default BookLibrary;
