import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './post.module.css';

const Post = () => {
  const [nameInput, setNameInput] = useState('Jack');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submit');

    // get to json placeholder
    // axios.get('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    //   console.log(data);
    // });

    // axios
    //   .get('http://yurtyurt.com/php/get/json/')
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));

    const obj = { name: nameInput };
    const jsonObj = JSON.stringify(obj);
    console.log(jsonObj);

    axios
      .post('http://yurtyurt.com/php/post/json/', jsonObj)
      .then((data) => {
        console.log(data.data.greeting);
        setMessage(data.data.greeting);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes['post']}>
      <form className={classes['form']} onSubmit={(e) => submitHandler(e)}>
        <label className={classes['form__label']} htmlFor='name'>
          Name
        </label>
        <input
          className={classes['form__input']}
          id='name'
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button className={classes['form__button']}>Submit</button>
      </form>
      <Link to='/first' className={classes['link']}>
        To First
      </Link>
      <div className={classes['result']}>{message}</div>
    </div>
  );
};

export default Post;
