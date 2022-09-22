import { Fragment } from "react";
import {/* useNavigate,*/ useLocation } from "react-router-dom";

import BookItem from "./BookItem";
import classes from "./BookList.module.css";

const sortBooks = (books, ascending) => {
  return books.sort((bookA, bookB) => {
    if (ascending) {
      return bookA.id > bookB.id ? 1 : -1;
    } else {
      return bookA.id < bookB.id ? 1 : -1;
    }
  });
};

const BookList = (props) => {
  const url = window.location.href;
  console.log(url);
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedBooks = sortBooks(props.books, isSortingAscending);

  /*const changeSortingHandler = () => {
    console.log("is working");
    navigate(location.pathname, {
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    location.search = `?sort=${isSortingAscending ? "desc" : "asc"}`;
    console.log(location.search);   
  }; */

  return (
    <Fragment>
      {/* <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
        </div> */}
      <ul className={classes.list}>
        {sortedBooks.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            text={book.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default BookList;
