import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postList.module.scss';

import Post from '../post';
import PostForm from '../postForm';

export default function PostList() {
  const [switchPlus, setSwitchPlusPlus] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get('http://localhost:4000/posts/getPosts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => setPosts([]));
  };

  function tapPlus() {
    setSwitchPlusPlus(!switchPlus);
  }

  function renderPosts() {
    return posts.map((post: any) => (
      <Post
        key={post.id}
        id={post.id}
        title={post.post_title}
        body={post.post_body}
        avatar={post.avatar_path}
        author={post.author_name}
        date={post.date}
      />
    ));
  }

  return (
    <div className={styles.main}>
      <div className={styles.plusContainer}>
        <div className={styles.plus} onClick={tapPlus}>
          <div className={styles.plus1}></div>
          <div className={styles.plus2}></div>
        </div>
        <h3>Расскажите миру что-то новое</h3>
      </div>
      {switchPlus ? <PostForm getPosts={getPosts} tapPlus={tapPlus} /> : null}

      {renderPosts()}
    </div>
  );
}
