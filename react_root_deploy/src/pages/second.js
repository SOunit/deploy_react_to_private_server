import { Link } from 'react-router-dom';
import classes from './second.module.css';

const Second = () => {
  return (
    <div className={classes['second']}>
      <h1 className={classes['second__title']}>Second</h1>
      <Link to='/first'>To First</Link>
    </div>
  );
};

export default Second;
