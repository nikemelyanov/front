import styles from './postComments.module.scss';
import img from '../../assets/images/2.png';

export default function PostComments(props: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img className={styles.avatar} src={img} alt="userImages" />
        <p className={styles.author}>Elena Banks</p>
      </div>
      <p className={styles.body}>
        {props.body}
      </p>
      <div className={styles.bottom}>
        <div className={styles.date}>{'21.21.21'}</div>
      </div>
    </div>
  );
}
