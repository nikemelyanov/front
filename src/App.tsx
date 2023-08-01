import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/router/PrivateRoute';
import Home from './pages/home';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
