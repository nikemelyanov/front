import { useState } from 'react';
import styles from './post.module.scss';

import image from '../../assets/img/1.png';
import like from '../../assets/icons/like.png';
import likeActive from '../../assets/icons/likeActive.png';
import comment from '../../assets/icons/comment.png';

export default function Post(props: any) {
  const [liked, setLiked] = useState(false);

  function isLiked() {
    setLiked(!liked);
  }

  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img className={styles.avatar} src={image} alt="userImages" />
        <p className={styles.author}>{props.author}</p>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <p className={styles.body}>{props.body}</p>
      <div className={styles.postBottom}>
        <div className={styles.date}>{props.date}</div>
        <div>
          <img
            className={styles.likes}
            src={liked ? likeActive : like}
            alt="like"
            onClick={isLiked}
          />
          <img className={styles.chat} src={comment} alt="chat" />
        </div>
      </div>
    </div>
  );
}
