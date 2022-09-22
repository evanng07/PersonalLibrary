import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleBook } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import HighlightedBook from '../components/books/HighlightedBook';

const BookDetail = () => {
  const params = useParams();

  const { bookId } = params;

  const { sendRequest, status, data: loadedBook, error } = useHttp(
    getSingleBook,
    true
  );

  useEffect(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedBook.title) {
    return <p>No book found!</p>;
  }

  return (
    <Fragment>
      <HighlightedBook title={loadedBook.title} text={loadedBook.text} author={loadedBook.author} />
      <Outlet />
    </Fragment>
  );
};

export default BookDetail;