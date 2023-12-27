import styles from './comment.module.scss';

export default function Comment(props: any) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          className={styles.avatar}
          src={`http://retwitzzz.ru/images/${props.avatar}`}
          alt="userImages"
        />
        <p className={styles.author}>{`${props.authorFirstname + ' ' + props.authorLastname}`}</p>
      </div>
      <p className={styles.body}>{props.body}</p>
      <div className={styles.bottom}>
        <div className={styles.date}>{props.date}</div>
      </div>
    </div>
  );
}
