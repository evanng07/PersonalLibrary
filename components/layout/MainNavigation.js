import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>GreatBooks</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/books' className={navData => navData.isActive ? classes.active : '' }>
              All Books
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-book' className={navData => navData.isActive ? classes.active : '' }>
              Add a Book
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;