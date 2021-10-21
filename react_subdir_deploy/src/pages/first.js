import LinkButton from '../component/linkButton/LinkButton';
import classes from './first.module.css';

const First = () => {
  return (
    <div className={classes['first']}>
      <h1 className={classes['first__title']}>First</h1>
      <LinkButton to='/second' text='To Second' />
      <LinkButton to='/post' text='To Post' />
    </div>
  );
};

export default First;
