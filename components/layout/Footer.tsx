import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-mid text-gold-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">For Buyers</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="hover:text-gold transition-fluid duration-300">Shop All</Link></li>
              <li><Link href="/browse?condition=NEW" className="hover:text-gold transition-fluid duration-300">New Arrivals</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300">My Orders</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300">My Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300">Start Selling</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-fluid duration-300">Seller Dashboard</Link></li>
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300">Create Listing</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-fluid duration-300">Payouts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li><Link href="/login" className="hover:text-gold transition-fluid duration-300">Sign In</Link></li>
              <li><Link href="/register" className="hover:text-gold transition-fluid duration-300">Create Account</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300">My Profile</Link></li>
              <li><Link href="/account" className="hover:text-gold transition-fluid duration-300">Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/browse" className="hover:text-gold transition-fluid duration-300">Browse</Link></li>
              <li><Link href="/dashboard" className="hover:text-gold transition-fluid duration-300">Dashboard</Link></li>
              <li><Link href="/checkout" className="hover:text-gold transition-fluid duration-300">Cart</Link></li>
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300">List an Item</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="font-serif text-gold text-xl hover:opacity-80 transition-fluid duration-300">Noor</Link>
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
