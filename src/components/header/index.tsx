import styles from './header.module.scss';
import image7 from '../../assets/img/7.png';
import logoutImg from '../../assets/icons/logout.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const navigate = useNavigate();
  function logout() {
    const token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('token')
      navigate('/login')
    }
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <span>RE</span>TWITTz
      </h1>

      <div className={styles.user}>
        <img className={styles.avatar} src={image7} alt="userImages" />
        <div className={styles.userInfo}>Nikita Emelyanov</div>
        <img className={styles.logout} src={logoutImg} alt="logout" onClick={logout}/>
      </div>
    </div>
  );
}
