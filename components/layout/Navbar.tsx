import { Search, MessageCircle, ShoppingCart, Bell, User } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif text-gold">نور</span>
              <span className="text-xl font-serif text-white">Noor</span>
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/browse" className="text-white hover:text-gold-light transition-colors font-sans">
              Shop
            </Link>
            <Link href="/sell" className="text-white hover:text-gold-light transition-colors font-sans">
              Sell
            </Link>
            <Link href="/about" className="text-white hover:text-gold-light transition-colors font-sans">
              About
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search modest fashion..."
                  className="pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              </div>
            </div>

            {/* Icons */}
            <button className="p-2 text-white hover:text-gold transition-colors">
              <MessageCircle className="h-5 w-5" />
            </button>
            <button className="p-2 text-white hover:text-gold transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-white hover:text-gold transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </button>
            <button className="p-2 text-white hover:text-gold transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Start Selling Button */}
            <Button variant="outline" size="sm">
              Start Selling
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}