import { Link } from 'react-router-dom';
import classes from './LinkButton.module.css';

const LinkButton = (props) => {
  return (
    <Link to={props.to} className={classes['link']}>
      {props.text}
    </Link>
  );
};

export default LinkButton;
