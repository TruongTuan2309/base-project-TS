import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  label?: string
  classNameLabel?: string
  classNameError?: string
}

const Input = ({
  errorMessage,
  register,
  rules,
  label,
  classNameLabel = '',
  className = '',
  classNameError = '',
  name,
  required = false,
  ...rest
}: InputProps) => {
  const registerResult = register && name ? register(name, rules) : null

  return (
    <>
      <div className='space-y-3'>
        {label && (
          <p
            className={'text-base font-medium text-gray-900 ' + classNameLabel}
          >
            {required && <span className='text-red-500 mr-1'>*</span>}
            {label}
          </p>
        )}
        <input
          className={
            'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' +
            className
          }
          {...registerResult}
          {...rest}
        />
      </div>

      <p className={'text-red-500 text-sm h-5 pl-1 mt-1 ' + classNameError}>
        {errorMessage}
      </p>
    </>
  )
}
export default Input
