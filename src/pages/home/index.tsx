import React, { useEffect } from 'react';
import Bar from '../../components/bar';
import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostList from '../../components/postList';

import styles from './home.module.scss';

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Bar />
        <div className={styles.postContainer}>
          <PostForm />
          <PostList />
        </div>
      </div>
    </div>
  );
}
