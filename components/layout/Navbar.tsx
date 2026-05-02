'use client'

import { Search, MessageCircle, ShoppingCart, Bell, User, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/browse?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border transition-fluid duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif text-gold">Noor</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans">
              Shop
            </Link>
            <Link href="/create-listing" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans">
              Sell
            </Link>
            <Link href="/about" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search modest fashion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:-translate-y-[1px] focus:shadow-md transition-fluid duration-300 w-64"
              />
              <button type="submit" className="absolute left-3 top-2.5">
                <Search className="h-4 w-4 text-white/50" />
              </button>
            </form>

            <Link href="/account" aria-label="Messages" className="p-2 text-white hover:text-gold transition-fluid duration-300">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="/checkout" aria-label="Cart" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                3
              </span>
            </Link>
            <Link href="/account" aria-label="Notifications" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                5
              </span>
            </Link>
            <Link href="/account" aria-label="Account" className="p-2 text-white hover:text-gold transition-fluid duration-300">
              <User className="h-5 w-5" />
            </Link>

            <Link href="/create-listing">
              <Button variant="outline" size="sm">
                Start Selling
              </Button>
            </Link>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} className="md:hidden p-2 text-white hover:text-gold transition-fluid duration-300">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <form onSubmit={handleSearch} className="mt-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold font-sans"
                />
                <button type="submit" className="absolute left-3 top-2.5">
                  <Search className="h-4 w-4 text-white/50" />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <Link href="/browse" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans">Shop</Link>
              <Link href="/create-listing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans">Sell</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans">About</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
