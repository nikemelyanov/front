import styles from './bar.module.scss';
import imageFlame from '../../assets/icons/flame.png';

export default function Bar() {
  return (
    <div className={styles.menu}>
      <ul>
        <li className={styles.popular}>
          <a href="#">Популярные</a>
          <img src={imageFlame} alt="popular" />
        </li>
        <li className={styles.popular}>
          <a href="#">Вам понравились</a>
          <img src={imageFlame} alt="popular" />
        </li>
        <li className={styles.popular}>
          <a href="#">Друзья</a>
          <img src={imageFlame} alt="popular" />
        </li>
      </ul>
    </div>
  );
}
