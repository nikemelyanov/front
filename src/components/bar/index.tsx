import styles from './bar.module.scss';

export default function Bar() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <a href="#">Top of the month</a>
        </li>
        <li>
          <a href="#">Tell the world</a>
        </li>
        <li>
          <a href="#">Friends</a>
        </li>

        <li>
          <a href="#">Recomendation</a>
        </li>
      </ul>
    </div>
  );
}
