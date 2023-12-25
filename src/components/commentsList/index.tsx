import React from 'react';
import axios from 'axios';
import Comment from '../comment';
import styles from './commentsList.module.scss';

export default function CommentsList(props: any) {
  const [commentData, setCommentData] = React.useState([]);
  const [commentBody, setCommentBody] = React.useState('');

  React.useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    await axios
      .post('http://45.9.41.154:7777/comments/getComments', {
        postId: props.post_id,
      })
      .then((response) => {
        setCommentData(response.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    axios
      .post(
        'http://45.9.41.154:7777/comments/createComment',
        {
          body: commentBody,
          postId: props.post_id,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then(() => {
        getComments();
        setCommentBody('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function renderComments() {
    return commentData.map((comment: any) => (
      <Comment
        key={comment.id}
        id={comment.id}
        body={comment.body}
        // author={comment.author_id}
        avatar={comment.avatar_path}
        date={comment.created_at}
        authorFirstname={comment.first_name}
        authorLastname={comment.last_name}
      />
    ));
  }

  return (
    <>
      <form className={styles.commentsForm} onSubmit={handleSubmit}>
        <input
          className={styles.commentBody}
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <button type="submit">опубликовать</button>
      </form>
      {renderComments()}
    </>
  );
}
