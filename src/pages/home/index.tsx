import styles from './home.module.scss';

import image from '../../assets/img/1.png'
import image3 from '../../assets/img/3.png'
import image7 from '../../assets/img/7.png'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.user}>
      <img className={styles.logo} src={image7} alt='userImages' />
        <div className={styles.userInfo}>Nikita Emelyanov</div>
      </div>
      <div className={styles.container}>
        <div className={styles.menu}>
          <ul>
            <li>
              <a href="#">Top of the month</a>
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
              <img className={styles.postLogo} src={image} alt='userImages' />
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
            <img className={styles.postLogo} src={image} alt='userImages' />
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
            <img className={styles.postLogo} src={image3} alt='userImages' />
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
