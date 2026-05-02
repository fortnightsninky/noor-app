import { Search, MessageCircle, ShoppingCart, Bell, User } from 'lucide-react'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function Navbar() {
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
            <div className="relative hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search modest fashion..."
                  className="pl-10 pr-4 py-2 bg-bg-mid border border-border rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold focus:-translate-y-[1px] focus:shadow-md transition-fluid duration-300 w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/50" />
              </div>
            </div>

            <Link href="/account" className="p-2 text-white hover:text-gold transition-fluid duration-300">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="/checkout" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                3
              </span>
            </Link>
            <Link href="/account" className="p-2 text-white hover:text-gold transition-fluid duration-300 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gold text-bg text-xs rounded-full h-5 w-5 flex items-center justify-center font-sans">
                5
              </span>
            </Link>
            <Link href="/account" className="p-2 text-white hover:text-gold transition-fluid duration-300">
              <User className="h-5 w-5" />
            </Link>

            <Link href="/create-listing">
              <Button variant="outline" size="sm">
                Start Selling
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
