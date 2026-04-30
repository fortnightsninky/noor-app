import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md'
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-bg-mid text-white',
    gold: 'bg-gold text-bg',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-bg',
    error: 'bg-red-600 text-white'
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm'
  }

  return (
    <span
      className={`inline-flex items-center rounded-md font-sans font-medium ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </span>
  )
}