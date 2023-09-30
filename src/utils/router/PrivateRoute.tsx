import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  let auth = true;
  if (localStorage.getItem('token') !== null) {
    auth = true;
  } else {
    auth = true;
  }

  return (
    auth ? <Outlet /> : <Navigate to="login" />
  );
}
  