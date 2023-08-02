import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.scss';

const RegisterPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();
  function navigateToLogin() {
    navigate('/login');
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/auth/register', {
        email: email,
        password: password,
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>
        <span>RE</span>TWITTz
      </h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">зарегистрироваться</button>
        <button onClick={navigateToLogin}>уже есть аккаунт?</button>
      </form>
    </div>
  );
};

export default RegisterPage;
