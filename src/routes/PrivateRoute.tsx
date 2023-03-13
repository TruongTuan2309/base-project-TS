import { route } from '@/constants/route'
import Error404 from '@/pages/Error'
import { Navigate, Outlet } from 'react-router-dom'

type PrivateRouteProps = {
  roles: string[]
}

const PrivateRoute = ({ roles }: PrivateRouteProps) => {
  const token = localStorage.getItem('token')
  const roleUser = localStorage.getItem('role')
  const isRoles = token && roles.includes(roleUser || '') ? true : false
  if (!token) return <Navigate to={route.login} />
  if (token && !isRoles) {
    return <Error404 />
  }
  return <Outlet />
}
export default PrivateRoute
