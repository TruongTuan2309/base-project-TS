import Input from '@/components/common/Input'
import { route } from '@/constants/route'
import { schema } from '@/utils/rules'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginType } from '@/types/auth'
import Button from '@/components/common/Button'
const Login = () => {
  const loginSchema = schema.pick(['email', 'password'])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema)
  })
  const onSubmit = (data: LoginType) => {
    console.log(data)
  }
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-200'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                name='email'
                type='text'
                label='Your email'
                placeholder='name@gmail.com'
                register={register}
                errorMessage={errors.email?.message}
              />
              <Input
                name='password'
                type='password'
                label='Password'
                placeholder='••••••••'
                register={register}
                errorMessage={errors.password?.message}
              />
            </div>
            <div className='flex items-center justify-end'>
              <Link
                to={route.forgotPassword}
                className='text-sm font-medium text-blue-500 hover:underline'
              >
                Forgot password?
              </Link>
            </div>
            <Button className='w-full mt-10'>Submit</Button>
            <p className='text-sm font-light text-black mt-4'>
              Don’t have an account yet?{' '}
              <Link
                to={route.register}
                className='font-medium text-blue-500 hover:underline'
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
