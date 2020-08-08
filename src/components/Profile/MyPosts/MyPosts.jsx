import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, post: 'Hey you there!', likesCount: '4 ' },
    { id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 ' },
    { id: 3, post: ':O:O:O:O', likesCount: '12 ' },
  ];

  let postsElements = posts.map(post => <Post message={post.post} likes={post.likesCount} />);

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.post}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
