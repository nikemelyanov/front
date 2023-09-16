import React, { useEffect, useState } from 'react';
import AppContext from '../../context';
import Bar from '../../components/bar';
import Header from '../../components/header';
import PostForm from '../../components/postForm';
import PostList from '../../components/postList';

import styles from './home.module.scss';
import axios from 'axios';
import Post from '../../components/post';

export default function Home() {
  
  
  const [postSubmit, setPostSubmit] = React.useState();
  const [payload, setPayload] = useState({
    firstname: '',
    lastname: '',
    avatar: '',
  });

  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token !== null) {
        const tokenParts = token.split('.');
        const userPayload = JSON.parse(
          decodeURIComponent(window.atob(tokenParts[1]))
        );
        setPayload(userPayload);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  

  return (
    <AppContext.Provider value={{ setPostSubmit }}>
      <div className={styles.main}>
        <Header
          fisrtname={payload.firstname}
          lastname={payload.lastname}
          avatar={payload.avatar}
        />
        <div className={styles.container}>
          <Bar />
          <div className={styles.postContainer}>
            <PostList />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
