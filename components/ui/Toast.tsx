'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

type ToastType = 'success' | 'error' | 'info'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastContextValue {
  toast: (message: string, type?: ToastType) => void
  confirm: (message: string) => Promise<boolean>
}

const ToastContext = createContext<ToastContextValue>({ toast: () => {}, confirm: () => Promise.resolve(false) })

export function useToast() {
  return useContext(ToastContext)
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [confirmState, setConfirmState] = useState<{ message: string; resolve: (value: boolean) => void } | null>(null)

  const toast = useCallback((message: string, type: ToastType = 'info') => {
    const id = String(Date.now())
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }, [])

  const confirm = useCallback((message: string): Promise<boolean> => {
    return new Promise(resolve => {
      setConfirmState({ message, resolve })
    })
  }, [])

  const handleConfirm = (value: boolean) => {
    confirmState?.resolve(value)
    setConfirmState(null)
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    error: <AlertCircle className="h-5 w-5 text-red-500" />,
    info: <Info className="h-5 w-5 text-gold" />
  }

  const bgClasses = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-gold/10 border-gold/30'
  }

  return (
    <ToastContext.Provider value={{ toast, confirm }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 max-w-sm">
        {toasts.map(t => (
          <div key={t.id} className={`flex items-center gap-3 px-4 py-3 rounded-md border shadow-lg animate-slide-up ${bgClasses[t.type]}`}>
            {icons[t.type]}
            <p className="text-sm text-text-dark font-sans flex-1">{t.message}</p>
            <button onClick={() => removeToast(t.id)} aria-label="Dismiss" className="p-1 text-text-muted hover:text-text-dark">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Confirm dialog */}
      {confirmState && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50" onClick={() => handleConfirm(false)}>
          <div className="bg-bg-light rounded-lg p-6 max-w-sm mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <p className="font-sans text-text-dark mb-6">{confirmState.message}</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => handleConfirm(false)} className="px-4 py-2 border border-border rounded-md text-text-dark font-sans hover:bg-bg-mid transition-fluid duration-300">Cancel</button>
              <button onClick={() => handleConfirm(true)} className="px-4 py-2 bg-red-500 text-white rounded-md font-sans hover:bg-red-600 transition-fluid duration-300">Confirm</button>
            </div>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  )
}
