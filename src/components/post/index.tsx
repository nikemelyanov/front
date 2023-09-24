import React from 'react';
import styles from './post.module.scss';

import like from '../../assets/icons/like.png';
import likeActive from '../../assets/icons/likeActive.png';
import comment from '../../assets/icons/ch.png';
import commentActive from '../../assets/icons/ch_active.png';
import PostComments from '../postComments';
import axios from 'axios';

export default function Post(props: any) {
  const [liked, setLiked] = React.useState(false);
  const [commentsBtn, setCommentsBtn] = React.useState(false);
  const [commentsData, setCommentsData] = React.useState([]);

  const loadComments = () => {
    axios
      .post('http://localhost:4000/comments/getComments', {
        postId: props.id,
      })
      .then((response) => {
        setCommentsData(response.data);
      })
      .catch((err) => console.error(err));
  };

  function isLiked() {
    setLiked(!liked);
  }

  async function isComments() {
    setCommentsBtn(!commentsBtn);
    await loadComments();
  }

  function renderComments() {
    return commentsData.map((comment: any) => (
      <PostComments key={comment.id} id={comment.id} body={comment.body} />
    ));
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img
            className={styles.avatar}
            src={`http://localhost:4000/images/${props.avatar}`}
            alt="userImages"
          />
          <p className={styles.author}>{props.author}</p>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <p className={styles.body}>{props.body}</p>
        <div className={styles.bottom}>
          <div className={styles.date}>{props.date}</div>
          <div>
            <img
              className={styles.likes}
              src={liked ? likeActive : like}
              alt="like"
              onClick={isLiked}
            />
            <img
              className={styles.chat}
              src={commentsBtn ? commentActive : comment}
              alt="chat"
              onClick={isComments}
            />
          </div>
        </div>
      </div>
      {commentsBtn ? renderComments() : null}
    </>
  );
}
