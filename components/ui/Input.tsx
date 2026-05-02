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
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-text-dark font-sans label">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-2.5 text-text-muted/50 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={`w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-transparent font-sans transition-fluid duration-300 will-transform focus-visible:-translate-y-[1px] focus-visible:shadow-md ${icon ? 'pl-10' : ''} ${error ? 'border-red-500 focus-visible:ring-red-500' : ''} ${className}`}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500 font-sans" role="alert">{error}</p>
      )}
    </div>
  )
}
