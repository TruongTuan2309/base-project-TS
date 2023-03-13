import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import { ResetType } from '@/types/auth'
import { schema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
const ResetPassword = () => {
  const resetPasswordSchema = schema.pick(['confirm_password', 'password'])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetType>({
    resolver: yupResolver(resetPasswordSchema)
  })
  const onSubmit = (data: ResetType) => {
    console.log(data)
  }
  return (
    <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 bg-gray-200'>
      <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            New password
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
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
        </div>
      </div>
    </div>
  )
}
export default ResetPassword
