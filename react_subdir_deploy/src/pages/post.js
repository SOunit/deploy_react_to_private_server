import { useState } from 'react';
import classes from './post.module.css';

const Post = () => {
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');

    // post

    setMessage('submit!!');
  };

  return (
    <div className={classes['post']}>
      <form className={classes['form']} onSubmit={(e) => submitHandler(e)}>
        <label className={classes['form__label']} htmlFor='name'>
          Name
        </label>
        <input className={classes['form__input']} id='name' />
        <button className={classes['form__button']}>Submit</button>
      </form>
      <div className={classes['result']}>{message}</div>
    </div>
  );
};

export default Post;
