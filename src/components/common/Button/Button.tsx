import { styleButton } from '@/utils/styleButton'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'outline-light' | 'outline-danger'
}
const Button = ({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={
        'px-5 py-2.5 font-medium rounded-lg text-sm text-center ' +
        styleButton(variant) +
        className
      }
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
