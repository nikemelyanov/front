import styles from './header.module.scss';
import logoutImg from '../../assets/icons/logout.png';
import { useNavigate } from 'react-router-dom';

import user from '../../assets/img/7.png';

export default function Header(props: any) {

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
        <img className={styles.avatar} src={user} alt="userImages" />
        <div className={styles.userInfo}>{props.fisrtname + ' ' + props.lastname}</div>
        <img className={styles.logout} src={logoutImg} alt="logout" onClick={logout}/>
      </div>
    </div>
  );
}
