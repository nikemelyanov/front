import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './postList.module.scss';

import Post from '../post';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      let res = axios
        .get('http://localhost:4000/posts/getPosts')
        .then((response) => {
          setPosts(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  function renderPosts() {
    return posts.map((post: any) => (
      <Post key={post.id} title={post.title} body={post.body} />
    ));
  }

  return <div className={styles.main}>{renderPosts()}</div>;
}
