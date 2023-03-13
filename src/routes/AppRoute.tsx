import Loading from '@/components/common/Loading'
import ToastMessage from '@/components/common/ToastMessage'
import { route } from '@/constants/route'
import { withLoading } from '@/hocs/withLoading'
import Error404 from '@/pages/Error'
import Home from '@/pages/Home'
import Login from '@/pages/Auth/Login'
import PrivateRoute from '@/routes/PrivateRoute'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Register from '@/pages/Auth/Register'
import ForgotPassword from '@/pages/Auth/ForgotPassword'
import ResetPassword from '@/pages/Auth/ResetPassword'

const Error404Page = withLoading(Error404)
const LoginPage = withLoading(Login)
const HomePage = withLoading(Home)
const RegisterPage = withLoading(Register)
const ForgotPasswordPage = withLoading(ForgotPassword)
const ResetPasswordPage = withLoading(ResetPassword)
const AppRoute = () => {
  return (
    <>
      <ToastMessage />
      <Loading />
      <Routes>
        <Route element={<PrivateRoute roles={['admin']} />}></Route>
        <Route index path={route.home} element={<HomePage />} />
        <Route path={route.login} element={<LoginPage />} />
        <Route path={route.register} element={<RegisterPage />} />
        <Route path={route.forgotPassword} element={<ForgotPasswordPage />} />
        <Route path={route.resetPassword} element={<ResetPasswordPage />} />
        <Route path={route.error} element={<Error404Page />} />
        <Route path='*' element={<Navigate to={route.error} />} />
      </Routes>
    </>
  )
}
export default AppRoute
