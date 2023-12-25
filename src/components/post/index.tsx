import React from "react";
import styles from "./post.module.scss";

import like from "../../assets/icons/like.png";
import likeActive from "../../assets/icons/likeActive.png";
import comment from "../../assets/icons/ch.png";
import commentActive from "../../assets/icons/ch_active.png";
import CommentsList from "../commentsList";
import axios from "axios";

export default function Post(props: any) {
  const [liked, setLiked] = React.useState(false);
  const [commentsBtn, setCommentsBtn] = React.useState(false);

  function isLiked() {
    setLiked(!liked);

    axios
      .post("http://localhost:4000/likes/addLike", {
        postId: props.post_id,
        userId: props.user_id,
      })
      .catch((err) => console.error(err));
  }

  function isComments() {
    setCommentsBtn(!commentsBtn);
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
          <p className={styles.author}>
            {props.user_firstname + " " + props.user_lastname}
          </p>
          <h1 className={styles.title}>{props.title}</h1>
        </div>
        <div className={styles.body}>
          <p>{props.body}</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.date}>{props.date}</div>
          <div className={styles.LikesChatContainer}>
            <div className={styles.likesConteiner}>
              <p>{props.likes}</p>
              <img
                className={styles.likes}
                src={liked ? likeActive : like}
                alt="like"
                onClick={isLiked}
              />
            </div>
            <img
              className={styles.comments}
              src={commentsBtn ? commentActive : comment}
              alt="chat"
              onClick={isComments}
            />
          </div>
        </div>
      </div>
      {commentsBtn ? <CommentsList post_id={props.post_id} /> : null}
    </>
  );
}
