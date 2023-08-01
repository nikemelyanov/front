import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <div className={styles.logo}></div>
        <div className={styles.userInfo}>user info</div>
      </div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#">Top posts</a>
            </li>
            <li>
              <a href="#">My posts</a>
            </li>
            <li>
              <a href="#">Friends</a>
            </li>

            <li>
              <a href="#">Recomendation</a>
            </li>
          </ul>
        </div>
        <div className={styles.postBox}>
          <div className={styles.post}>
            <div className={styles.postContainer}>
              <div className={styles.postLogo}></div>
              <h1 className={styles.postTitle}>New features NODE JS</h1>
            </div>
            <div className={styles.postDate}>01.08.23 Moscow</div>
            <p className={styles.postBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              fugit vitae minima officia in quidem qui nemo velit non
              voluptates! Maiores at amet qui aliquid natus quibusdam voluptates
              architecto nostrum.
            </p>
          </div>
          <div className={styles.post}>
            <div className={styles.postContainer}>
              <div className={styles.postLogo}></div>
              <h1 className={styles.postTitle}>Learn SQL</h1>
            </div>
            <div className={styles.postDate}>28.07.23 Moscow</div>
            <p className={styles.postBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              fugit vitae minima officia in quidem qui nemo velit non
              voluptates! Maiores at amet qui aliquid natus quibusdam voluptates
              architecto nostrum. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sed architecto totam saepe! Id, distinctio quos
              animi ipsam modi tempora impedit obcaecati esse omnis facere, nemo
              laborum deserunt sapiente accusamus quasi.
            </p>
          </div>
          <div className={styles.post}>
            <div className={styles.postContainer}>
              <div className={styles.postLogo}></div>
              <h1 className={styles.postTitle}>2023 frontend frameworks</h1>
            </div>
            <div className={styles.postDate}>27.07.23 Moscow</div>
            <p className={styles.postBody}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              fugit vitae minima officia in quidem qui nemo velit non
              voluptates! Maiores at amet qui aliquid natus quibusdam voluptates
              architecto nostrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
