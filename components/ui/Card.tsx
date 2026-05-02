import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  perpetual?: boolean
  bordered?: boolean
}

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  perpetual = false,
  bordered = false
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7'
  }

  const baseClasses = 'bg-bg-light rounded-md shadow-tinted transition-fluid duration-300'
  const borderedClass = bordered ? 'border border-border' : ''
  const hoverClass = hover ? 'hover:shadow-hover hover:-translate-y-[2px] hover:scale-[1.01]' : ''
  const perpetualClass = perpetual ? 'animate-float' : ''

  return (
    <div
      className={`${baseClasses} ${paddingClasses[padding]} ${hoverClass} ${perpetualClass} ${borderedClass} ${className}`}
    >
      {children}
    </div>
  )
}
