import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  let auth = false;
  if (localStorage.getItem('token') !== null) {
    auth = true;
  } else {
    auth = false;
  }

  return (
    auth ? <Outlet /> : <Navigate to="login" />
  );
}
  