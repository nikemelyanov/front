import styles from './header.module.scss';
import image7 from '../../assets/img/7.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <span>RE</span>TWITTz
      </h1>

      <div className={styles.user}>
        <img className={styles.avatar} src={image7} alt="userImages" />
        <div className={styles.userInfo}>Nikita Emelyanov</div>
      </div>
    </div>
  );
}
