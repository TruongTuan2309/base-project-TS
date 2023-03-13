import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { route } from '@/constants/route'
import { RegisterType } from '@/types/auth'
import { schema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterType>({
    resolver: yupResolver(registerSchema)
  })
  const onSubmit = (data: RegisterType) => {
    console.log(data)
  }
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-200'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>
            Create and account
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
              <Input
                name='confirm_password'
                type='password'
                label='Confirm password'
                placeholder='••••••••'
                register={register}
                errorMessage={errors.confirm_password?.message}
              />
            </div>
            <Button className='w-full mt-10'>Submit</Button>
          </form>
          <div>
            <span>Already have an account? </span>
            <Link to={route.login} className='text-blue-500'>
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Register
