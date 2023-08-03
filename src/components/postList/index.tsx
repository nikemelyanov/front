import styles from './postList.module.scss';

import image from '../../assets/img/1.png';
import image3 from '../../assets/img/3.png';

export default function PostList() {
  return (
    <div className={styles.main}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img className={styles.avatar} src={image} alt="userImages" />
          <h1 className={styles.title}>New features NODE JS</h1>
        </div>
        <div className={styles.date}>01.08.23 Moscow</div>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          fugit vitae minima officia in quidem qui nemo velit non voluptates!
          Maiores at amet qui aliquid natus quibusdam voluptates architecto
          nostrum.
        </p>
      </div>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img className={styles.avatar} src={image} alt="userImages" />
          <h1 className={styles.title}>Learn SQL</h1>
        </div>
        <div className={styles.date}>28.07.23 Moscow</div>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          fugit vitae minima officia in quidem qui nemo velit non voluptates!
          Maiores at amet qui aliquid natus quibusdam voluptates architecto
          nostrum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
          architecto totam saepe! Id, distinctio quos animi ipsam modi tempora
          impedit obcaecati esse omnis facere, nemo laborum deserunt sapiente
          accusamus quasi.
        </p>
      </div>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <img className={styles.avatar} src={image3} alt="userImages" />
          <h1 className={styles.title}>2023 frontend frameworks</h1>
        </div>
        <div className={styles.date}>27.07.23 Moscow</div>
        <p className={styles.body}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          fugit vitae minima officia in quidem qui nemo velit non voluptates!
          Maiores at amet qui aliquid natus quibusdam voluptates architecto
          nostrum.
        </p>
      </div>
    </div>
  );
}
