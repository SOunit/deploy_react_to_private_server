import classes from './post.module.css';

const Post = () => {
  return (
    <div className={classes['post']}>
      <form>
        <label htmlFor='name' />
        <input id='name' />
      </form>
    </div>
  );
};

export default Post;
