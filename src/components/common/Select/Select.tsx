import { SelectHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
  label?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

const Select = ({
  options,
  label,
  register,
  rules,
  name,
  ...rest
}: SelectProps) => {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div>
      {label && (
        <p className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
          {label}
        </p>
      )}
      <select
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        {...rest}
        {...registerResult}
      >
        <option selected>Choose a country</option>
        {options.map((item: { value: string; label: string }) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
