import { Link } from 'react-router-dom';

import classes from './BookItem.module.css';

const BookItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <p>{props.title}</p>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/books/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default BookItem;