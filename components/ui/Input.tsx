import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-text-dark font-sans">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-500 font-sans">{error}</p>
      )}
    </div>
  )
}