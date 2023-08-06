import styles from './post.module.scss'

import image from '../../assets/img/1.png';

export default function Post(props: any) {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img className={styles.avatar} src={image} alt="userImages" />
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <div className={styles.date}>01.08.23 Moscow</div>
      <p className={styles.body}>{props.body}</p>
    </div>
  );
}
