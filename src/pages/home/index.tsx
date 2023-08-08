import React, { useEffect, useState } from 'react';
import Bar from '../../components/bar';
import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostList from '../../components/postList';

import styles from './home.module.scss';

export default function Home() {
  const [payload, setPayload] = useState({
    firstname: '',
    lastname: '', 
    avatar: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      const tokenParts = token.split('.');
      const userPayload = JSON.parse(decodeURIComponent(window.atob(tokenParts[1])));
      setPayload(userPayload);
    }
  }, []);

  const [switchPlus, setSwitchPlusPlus] = useState(false);
  function tapPlus() {
    setSwitchPlusPlus(!switchPlus);
  }
  return (
    <div className={styles.main}>
      <Header
        fisrtname={payload.firstname}
        lastname={payload.lastname}
        avatar={payload.avatar}
      />
      <div className={styles.container}>
        <Bar />
        <div className={styles.postContainer}>
          <div className={styles.plusContainer}>
            <div className={styles.plus} onClick={tapPlus}>
              <div className={styles.plus1}></div>
              <div className={styles.plus2}></div>
            </div>
            <h3>Расскажите миру что-то новое</h3>
          </div>
          {switchPlus ? <PostForm /> : null}
          <PostList />
        </div>
      </div>
    </div>
  );
}
