import { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: ReactNode
}

export default function Input({
  label,
  error,
  icon,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-text-dark font-sans label">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-2.5 text-text-muted/50">
            {icon}
          </div>
        )}
        <input
          className={`w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans transition-fluid duration-300 will-transform focus:-translate-y-[1px] focus:shadow-md ${icon ? 'pl-10' : ''} ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 font-sans">{error}</p>
      )}
    </div>
  )
}
