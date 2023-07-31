import {Outlet, Navigate} from 'react-router-dom'

export default function PrivateRoute() {
  const auth = true
  return (
    auth ? <Outlet /> : <Navigate to='login' />
  )
}
