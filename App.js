import { Route, Routes, Navigate, Link } from 'react-router-dom';

import AllQuotes from './pages/AllBooks';
import QuoteDetail from './pages/BookDetail';
import NewQuote from './pages/NewBook';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/books' />} />
        <Route path='/books' element={<AllQuotes />} />
        <Route path='/books/:bookId' element={<QuoteDetail />}>
          <Route
            path=''
            element={
              <div className='centered'>
                <Link className='btn--flat' to={`comments`}>
                  Load Comments
                </Link>
              </div>
            }
          />
          <Route path={`comments`} element={<Comments />} />
        </Route>
        <Route path='/new-book' element={<NewQuote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;