"use client"
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: 'buyer'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // Handle registration
    console.log('Register:', formData)
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h1 className="font-serif text-3xl text-text-dark mb-2">Join Noor</h1>
              <p className="text-text-muted font-sans">
                Create your account to start shopping or selling
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              <div>
                <label className="block text-sm font-medium text-text-dark font-sans mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2.5 pl-10 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                    placeholder="Create a password"
                    required
                    minLength={8}
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-text-muted/50" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-text-muted/50 hover:text-text-muted"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="text-xs text-text-muted mt-1 font-sans">
                  Must be at least 8 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark font-sans mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full px-3 py-2.5 pl-10 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                    placeholder="Confirm your password"
                    required
                  />
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-text-muted/50" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2.5 text-text-muted/50 hover:text-text-muted"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark font-sans mb-3">
                  Account Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: 'buyer' })}
                    className={`p-4 border rounded-md text-center transition-colors ${formData.accountType === 'buyer' ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/50'}`}
                  >
                    <div className="font-serif text-lg text-text-dark mb-1">Buyer</div>
                    <p className="text-sm text-text-muted font-sans">Shop modest fashion</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accountType: 'seller' })}
                    className={`p-4 border rounded-md text-center transition-colors ${formData.accountType === 'seller' ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/50'}`}
                  >
                    <div className="font-serif text-lg text-text-dark mb-1">Seller</div>
                    <p className="text-sm text-text-muted font-sans">Sell your creations</p>
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-gold border-border rounded focus:ring-gold"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-text-muted font-sans">
                  I agree to the{' '}
                  <Link href="/terms" className="text-gold hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-gold hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="h-4 w-4 text-gold border-border rounded focus:ring-gold"
                />
                <label htmlFor="newsletter" className="ml-2 text-sm text-text-muted font-sans">
                  Subscribe to newsletter for updates and promotions
                </label>
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Create Account
              </Button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-bg-light text-text-muted font-sans">
                    Or sign up with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                fullWidth
                className="flex items-center justify-center gap-3"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <div className="text-center mt-6">
                <p className="text-text-muted font-sans">
                  Already have an account?{' '}
                  <Link href="/login" className="text-gold hover:underline font-medium">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gold-light/70 font-sans">
              By creating an account, you agree to our{' '}
              <Link href="/terms" className="text-gold hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-gold hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}