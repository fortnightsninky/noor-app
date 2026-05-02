import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-mid text-gold-light" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">For Buyers</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Shop All</Link></li>
              <li><Link href="/browse?condition=NEW" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">New Arrivals</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">My Orders</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">My Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-white">For Sellers</h3>
            <ul className="space-y-2">
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Start Selling</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Seller Dashboard</Link></li>
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Create Listing</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Payouts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Create Account</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">My Profile</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">About</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Privacy Policy</Link></li>
              <li><Link href="/browse" className="hover:text-gold transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Browse</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="font-serif text-gold text-xl hover:opacity-80 transition-fluid duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">Noor</Link>
              <p className="text-sm text-gold-light/70 mt-1 font-sans">
                The marketplace for modest fashion
              </p>
            </div>
            <div className="text-sm text-gold-light/70 font-sans">
              &copy; {new Date().getFullYear()} Noor. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
