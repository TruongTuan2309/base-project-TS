import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  classNameLabel?: string
  value: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

const Checkbox = ({
  label,
  value,
  register,
  rules,
  className,
  classNameLabel,
  name,
  ...rest
}: CheckboxProps) => {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className='flex items-center mb-4'>
      <input
        id={value}
        type='checkbox'
        value={value}
        className={
          'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ' +
          className
        }
        {...registerResult}
        {...rest}
      />
      <label
        htmlFor={value}
        className={'ml-2 text-sm font-medium text-gray-900 ' + classNameLabel}
      >
        {label}
      </label>
    </div>
  )
}
export default Checkbox
