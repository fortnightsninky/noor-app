import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-medium transition-fluid duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg'

  const variantClasses = {
    primary: 'bg-gold text-bg hover:bg-gold-light/90 hover:-translate-y-[2px] hover:shadow-hover active:-translate-y-[0] active:shadow-md',
    secondary: 'bg-bg-light text-text-dark hover:bg-bg-mid/90 hover:text-white hover:-translate-y-[2px] hover:shadow-hover active:-translate-y-[0] active:shadow-md',
    outline: 'border border-gold text-gold bg-transparent hover:bg-gold/15 hover:-translate-y-[2px] hover:shadow-hover active:-translate-y-[0] active:shadow',
    ghost: 'text-gold hover:bg-gold/15 hover:-translate-y-[2px] hover:shadow-hover active:-translate-y-[0] active:shadow'
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}