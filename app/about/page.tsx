import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-[100dvh] bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-white mb-6 tracking-heading leading-heading">About Noor</h1>
          <p className="text-gold-light font-sans text-xl mb-12">The marketplace for modest fashion, built with trust and purpose.</p>

          <div className="space-y-12">
            <Card className="p-8">
              <h2 className="font-serif text-2xl text-text-dark mb-4 tracking-heading leading-heading">Our Mission</h2>
              <p className="text-text-muted font-sans leading-relaxed mb-4">
                Noor was founded to create a dedicated space where modest fashion is the standard, not the exception. We connect buyers and sellers who share a commitment to elegant, faith-aligned clothing — from abayas and hijabs to shalwar kameez and thobes.
              </p>
              <p className="text-text-muted font-sans leading-relaxed">
                We believe modest fashion deserves its own marketplace — one that understands the nuances of fit, fabric, and occasion that matter to our community.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-2xl text-text-dark mb-4 tracking-heading leading-heading">What Makes Us Different</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-serif text-lg text-text-dark mb-2">Community First</h3>
                  <p className="text-text-muted font-sans text-sm leading-relaxed">
                    Built by and for the modest fashion community. Every feature is designed with our users in mind.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-text-dark mb-2">Verified Sellers</h3>
                  <p className="text-text-muted font-sans text-sm leading-relaxed">
                    Every seller goes through our verification process. Noor Verified badges mean you can shop with confidence.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-text-dark mb-2">Buyer Protection</h3>
                  <p className="text-text-muted font-sans text-sm leading-relaxed">
                    Every purchase is covered by our buyer protection policy. If something isn&apos;t right, we&apos;ll make it right.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-2xl text-text-dark mb-4 tracking-heading leading-heading">For Sellers</h2>
              <p className="text-text-muted font-sans leading-relaxed mb-4">
                Noor makes it easy to turn your craft into a business. List your items for free, set your own prices, and reach customers who are actively looking for modest fashion.
              </p>
              <ul className="space-y-2 text-text-muted font-sans">
                <li>&bull; No listing fees — only 12% commission when you sell</li>
                <li>&bull; Loyalty program — earn down to 10% commission at $10K GMV</li>
                <li>&bull; Stripe Connect for fast, reliable payouts</li>
                <li>&bull; AI-powered listing descriptions to save you time</li>
              </ul>
              <div className="mt-6">
                <Link href="/create-listing" className="focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 rounded-sm">
                  <Button variant="primary">Start Selling</Button>
                </Link>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-serif text-2xl text-text-dark mb-4 tracking-heading leading-heading">Our Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold mb-1">10K+</p>
                  <p className="text-text-muted font-sans text-sm">Active Listings</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold mb-1">5K+</p>
                  <p className="text-text-muted font-sans text-sm">Trusted Sellers</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold mb-1">98%</p>
                  <p className="text-text-muted font-sans text-sm">Positive Reviews</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl text-gold mb-1">50K+</p>
                  <p className="text-text-muted font-sans text-sm">Happy Customers</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
