import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import QuoteForm from '../components/books/BookForm';
import useHttp from '../hooks/use-http';
import { addBook } from '../lib/api';

const NewBook = () => {
  const { sendRequest, status } = useHttp(addBook);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed') {
      navigate('/books');
    }
  }, [status, navigate]);

  const addBookHandler = (bookData) => {
    sendRequest(bookData);
  };

  return <QuoteForm isLoading={status === 'pending'} onAddBook={addBookHandler} />;
};

export default NewBook;