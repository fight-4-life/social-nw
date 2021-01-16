import React from 'react';
import styles from './Post.module.css';
import smallUserpic from '../../../../assets/mrrobot.png'
import {Button} from "antd";

type PropsType = {
  message: string
  likes: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={smallUserpic} alt='small userpic'/>
          {props.message}
        </div>
  <div><Button> {props.likes} likes </Button></div>
    </div>
  );
}

export default Post;
