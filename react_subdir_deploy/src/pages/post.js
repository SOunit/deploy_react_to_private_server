import { useState } from 'react';
import axios from 'axios';
import classes from './post.module.css';

const Post = () => {
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');

    // get to json placeholder
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
      console.log(data);
    });

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
