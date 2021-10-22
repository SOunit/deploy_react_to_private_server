import LinkButton from '../component/linkButton/LinkButton';
import classes from './second.module.css';

const Second = () => {
  return (
    <div className={classes['second']}>
      <h1 className={classes['second__title']}>Second</h1>
      <LinkButton to='/first' text='To First'></LinkButton>
      <LinkButton to='/post' text='To Post'></LinkButton>
    </div>
  );
};

export default Second;
