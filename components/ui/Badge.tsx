import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'gold' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md'
  perpetual?: boolean
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  perpetual = false
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

  const baseClasses = 'inline-flex items-center rounded-md font-sans font-medium transition-fluid duration-300'
  const hoverClass = 'hover:-translate-y-[1px] hover:shadow-md'
  const perpetualClass = perpetual ? 'animate-pulse' : ''

  return (
    <span
      className={`${baseClasses} ${hoverClass} ${variantClasses[variant]} ${sizeClasses[size]} ${perpetualClass}`}
    >
      {children}
    </span>
  )
}