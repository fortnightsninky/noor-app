import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/listing/ProductCard'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const categories = [
  { name: 'Abayas', count: '1,234' },
  { name: 'Hijabs & Scarves', count: '2,567' },
  { name: 'Shalwar Kameez', count: '3,456' },
  { name: 'Lehenga', count: '789' },
  { name: 'Saree', count: '1,890' },
  { name: 'Kurta', count: '2,345' },
  { name: 'Thobe', count: '1,234' },
  { name: 'Sherwani', count: '567' },
  { name: 'Lawn Suits', count: '3,210' },
  { name: 'Kids', count: '1,567' },
  { name: 'Accessories', count: '4,321' }
]

const occasions = ['Eid', 'Wedding', 'Casual', 'Formal', 'Prayer']

const featuredListings = [
  { id: '1', title: 'Embroidered Moroccan Kaftan Dress', price: 129.99, shippingCost: 8.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'ZahraDesigns', category: 'Abayas' },
  { id: '2', title: 'Handwoven Silk Hijab Set', price: 89.99, shippingCost: 5.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'SilkThreads', category: 'Hijabs & Scarves' },
  { id: '3', title: 'Traditional Pakistani Shalwar Kameez', price: 149.99, shippingCost: 12.99, images: ['/placeholder.jpg'], condition: 'LIKE_NEW' as const, sellerName: 'DesiVibes', category: 'Shalwar Kameez' },
  { id: '4', title: 'Wedding Lehenga with Zari Work', price: 349.99, shippingCost: 25.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'RoyalBridal', category: 'Lehenga' }
]

const culturalCards = [
  'Pakistani & Desi',
  'Arab & Gulf',
  'Somali & East African',
  'Turkish & Bosnian',
  'Indonesian & Malay',
  'West African'
]

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] bg-bg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[40vw] font-serif text-white/5 leading-none">نور</span>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:pr-8">
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-heading leading-heading">
                  The Marketplace for
                  <br />
                  <span className="block italic">Modest Fashion</span>
                </h1>
                <p className="text-xl text-gold-light mb-8 max-w-xl">
                  Discover authentic modest fashion from trusted sellers across the United States.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Link href="/browse">
                    <Button variant="primary" size="lg">Start Shopping</Button>
                  </Link>
                  <Link href="/create-listing">
                    <Button variant="outline" size="lg">Start Selling</Button>
                  </Link>
                </div>

                <div className="flex gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-serif text-gold">10K+</p>
                    <p className="text-sm text-gold-light/80 font-sans">Active Listings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif text-gold">5K+</p>
                    <p className="text-sm text-gold-light/80 font-sans">Trusted Sellers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-serif text-gold">98%</p>
                    <p className="text-sm text-gold-light/80 font-sans">Positive Reviews</p>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-bg-mid rounded-md overflow-hidden hover:-translate-y-[3px] hover:shadow-md transition-fluid duration-300">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-bg-light/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shop by Occasion */}
        <section className="py-12 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-white mb-8 tracking-heading leading-heading">Shop by Occasion</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {occasions.map((occasion) => (
                <Link key={occasion} href={`/browse?occasion=${occasion.toLowerCase()}`}>
                  <button className="flex-shrink-0 px-6 py-3 border border-gold rounded-md text-gold hover:bg-gold/15 transition-fluid duration-300 hover:-translate-y-[2px] hover:shadow-md font-sans">
                    {occasion}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section className="py-16 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-text-dark mb-10 tracking-heading leading-heading">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {categories.map((category) => (
                <Link key={category.name} href={`/browse?category=${encodeURIComponent(category.name.toLowerCase())}`}>
                  <div className="aspect-square bg-white rounded-md p-6 flex flex-col justify-between hover:-translate-y-[3px] hover:shadow-md transition-fluid duration-300 cursor-pointer">
                    <h3 className="font-serif text-xl text-text-dark tracking-heading leading-heading">{category.name}</h3>
                    <p className="text-sm text-text-muted font-sans">{category.count} items</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-16 bg-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-white mb-10 tracking-heading leading-heading">Featured Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredListings.map((listing) => (
                <ProductCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Culture */}
        <section className="py-16 bg-bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-text-dark mb-10 tracking-heading leading-heading">Browse by Culture</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {culturalCards.map((culture) => (
                <Link key={culture} href={`/browse?culture=${encodeURIComponent(culture.toLowerCase())}`}>
                  <div className="aspect-[4/3] bg-bg-mid rounded-md p-6 relative overflow-hidden group hover:-translate-y-[3px] hover:shadow-md transition-fluid duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <h3 className="relative font-serif text-xl text-white italic z-10 tracking-heading leading-heading">
                      {culture}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sell on Noor CTA */}
        <section className="py-16 gold-to-champagne">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl text-bg mb-6">Sell on Noor</h2>
            <p className="text-xl text-bg/80 mb-8 max-w-2xl mx-auto">
              No upfront fees. List for free. Only pay 12% when you sell.
            </p>
            <Link href="/create-listing">
              <Button variant="primary" size="lg">Start Selling Today</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
