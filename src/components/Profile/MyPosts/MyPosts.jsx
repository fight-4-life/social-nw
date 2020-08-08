import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

let postsData = [
  {id: 1, post: 'Hey you there!', likesCount: '4 '},
  {id: 2, post: 'Bro.. nice 2 meet u', likesCount: '46 '},
  {id: 3, post: ':O:O:O:O', likesCount: '12 '},
]

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
      <Post message={postsData[0].post} likes={postsData[0].likesCount} />
      <Post message={postsData[1].post} likes={postsData[1].likesCount} />
      <Post message={postsData[2].post} likes={postsData[2].likesCount} />
      </div>
    </div>
  );
}

export default MyPosts;
