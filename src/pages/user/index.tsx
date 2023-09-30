import Header from '../../components/header';
import styles from './user.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div>
        <div>Change logo*</div>
        <div>Change username*</div>
      </div>
    </div>
  );
}
