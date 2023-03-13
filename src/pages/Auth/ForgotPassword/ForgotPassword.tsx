import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { ForgotPasswordType } from '@/types/auth'
import { schema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
const ForgotPassword = () => {
  const forgotSchema = schema.pick(['email'])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordType>({
    resolver: yupResolver(forgotSchema)
  })
  const onSubmit = (data: ForgotPasswordType) => {
    console.log(data)
  }
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-200'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Forgot your password?
          </h1>
          <p>
            Don&apos;t fret! Just type in your email and we will send you a code
            to reset your password!
          </p>
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
            </div>

            <Button className='w-full mt-5'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ForgotPassword
