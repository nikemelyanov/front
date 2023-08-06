import axios from 'axios';
import { useState } from 'react';
import styles from './postForm.module.scss';

export default function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/posts/addPost', {
        title: title,
        body: body,
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Tell the world something new:</h1>
      <input className={styles.postTitle} type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className={styles.postBody} type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">to publish</button>
    </form>
  );
}
