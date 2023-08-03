import React, { useEffect, useState } from "react";
import Bar from "../../components/bar";
import Header from "../../components/header";
import PostForm from "../../components/postForm";
import PostList from "../../components/postList";

import styles from "./home.module.scss";

export default function Home() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
  }, []);

  const [switchPlus, setSwitchPlusPlus] = useState(false);
  function tapPlus() {
    setSwitchPlusPlus(!switchPlus);
  }
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.container}>
        <Bar />
        <div className={styles.postContainer}>
          <div className={styles.plus} onClick={tapPlus}>
            <div className={styles.plus1}></div>
            <div className={styles.plus2}></div>
          </div>
          {switchPlus ? <PostForm /> : null}
          <PostList />
        </div>
      </div>
    </div>
  );
}
