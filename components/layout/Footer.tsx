import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-bg-mid text-gold-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-lg mb-4">For Buyers</h3>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-gold transition-fluid duration-300">How It Works</Link></li>
              <li><Link href="/buyer-protection" className="hover:text-gold transition-fluid duration-300">Buyer Protection</Link></li>
              <li><Link href="/size-guide" className="hover:text-gold transition-fluid duration-300">Size Guide</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-fluid duration-300">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">For Sellers</h3>
            <ul className="space-y-2">
              <li><Link href="/create-listing" className="hover:text-gold transition-fluid duration-300">Start Selling</Link></li>
              <li><Link href="/seller-guide" className="hover:text-gold transition-fluid duration-300">Seller Guide</Link></li>
              <li><Link href="/fees" className="hover:text-gold transition-fluid duration-300">Fees & Pricing</Link></li>
              <li><Link href="/seller-protection" className="hover:text-gold transition-fluid duration-300">Seller Protection</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-gold transition-fluid duration-300">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gold transition-fluid duration-300">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-gold transition-fluid duration-300">Cookie Policy</Link></li>
              <li><Link href="/disputes" className="hover:text-gold transition-fluid duration-300">Dispute Resolution</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gold transition-fluid duration-300">About Noor</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-fluid duration-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-fluid duration-300">Contact Us</Link></li>
              <li><Link href="/press" className="hover:text-gold transition-fluid duration-300">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-serif text-gold text-xl">Noor</span>
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
