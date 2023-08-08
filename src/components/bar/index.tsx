import styles from './bar.module.scss';

export default function Bar() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="#">Популярные ретвитсы</a>
        </li>
        <li>
          <a href="#">По вашим интересам</a>
        </li>
        <li>
          <a href="#">Друзья</a>
        </li>
      </ul>
    </div>
  );
}
