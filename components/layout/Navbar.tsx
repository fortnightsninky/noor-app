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
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-border transition-fluid duration-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm" aria-label="Noor home">
              <span className="text-2xl font-serif text-gold tracking-heading">Noor</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              Shop
            </Link>
            <Link href="/create-listing" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              Sell
            </Link>
            <Link href="/about" className="text-white hover:text-gold-light transition-fluid duration-300 font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden md:block" role="search">
              <label htmlFor="nav-search" className="sr-only">Search modest fashion</label>
              <input
                id="nav-search"
                type="text"
                placeholder="Search modest fashion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:-translate-y-[1px] focus-visible:shadow-md transition-fluid duration-300 w-64"
              />
              <button type="submit" aria-label="Search" className="absolute left-3 top-2.5 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
                <Search className="h-4 w-4 text-white/50" />
              </button>
            </form>

            <Link href="/account" aria-label="Messages" className="p-2 text-white hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="/checkout" aria-label="Cart, 3 items" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans" aria-hidden="true">
                3
              </span>
            </Link>
            <Link href="/account" aria-label="Notifications, 5 new" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans" aria-hidden="true">
                5
              </span>
            </Link>
            <Link href="/account" aria-label="Account" className="p-2 text-white hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              <User className="h-5 w-5" />
            </Link>

            <Link href="/create-listing" className="hidden sm:inline-flex">
              <Button variant="outline" size="sm">
                Start Selling
              </Button>
            </Link>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} className="md:hidden p-2 text-white hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-slide-up" role="menu">
            <form onSubmit={handleSearch} className="mt-4 mb-4" role="search">
              <label htmlFor="mobile-search" className="sr-only">Search</label>
              <div className="relative">
                <input
                  id="mobile-search"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold font-sans"
                />
                <button type="submit" aria-label="Search" className="absolute left-3 top-2.5">
                  <Search className="h-4 w-4 text-white/50" />
                </button>
              </div>
            </form>
            <div className="space-y-2">
              <Link href="/browse" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm" role="menuitem">Shop</Link>
              <Link href="/create-listing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm" role="menuitem">Sell</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm" role="menuitem">About</Link>
              <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-white hover:text-gold font-sans focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm" role="menuitem">Account</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
