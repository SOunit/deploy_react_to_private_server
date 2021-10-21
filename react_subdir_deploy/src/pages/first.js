import { Link } from 'react-router-dom';
import classes from './first.module.css';

const First = () => {
  return (
    <div className={classes['first']}>
      <h1 className={classes['first__title']}>First</h1>
      <Link to='/second'>To second</Link>
      <Link to='/post'>To POST</Link>
    </div>
  );
};

export default First;
