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
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-sans font-medium transition-fluid duration-300 rounded-md focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2'

  const variantClasses = {
    primary: 'bg-gold text-bg hover:bg-gold-light/90 hover:-translate-y-[2px] hover:shadow-hover active:translate-y-[0] active:shadow-md disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none',
    secondary: 'bg-bg-light text-text-dark hover:bg-bg-mid/90 hover:text-white hover:-translate-y-[2px] hover:shadow-hover active:translate-y-[0] active:shadow-md disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none',
    outline: 'border border-gold text-gold bg-transparent hover:bg-gold/15 hover:-translate-y-[2px] hover:shadow-hover active:translate-y-[0] active:shadow disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none',
    ghost: 'text-gold hover:bg-gold/15 hover:-translate-y-[1px] hover:shadow-md active:translate-y-[0] active:shadow disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none'
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
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
