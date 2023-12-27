import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./postList.module.scss";

import Post from "../post";
import PostForm from "../postForm";

export default function PostList() {
  const [switchPlus, setSwitchPlusPlus] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get("https://retwitzzz.ru/api/posts/getPosts")
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
        post_id={post.id}
        user_id={post.author_id}
        user_firstname={post.first_name}
        user_lastname={post.last_name}
        avatar={post.avatar_path}
        title={post.title}
        body={post.body}
        date={post.created_at}
        likes={post.like_count}
        // fn={} // test
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
