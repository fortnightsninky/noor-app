"use client"

import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/listing/ProductCard'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Filter, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const allListings = [
  { id: '1', title: 'Embroidered Moroccan Kaftan Dress', price: 129.99, shippingCost: 8.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'ZahraDesigns', category: 'Abayas' },
  { id: '2', title: 'Handwoven Silk Hijab Set', price: 89.99, shippingCost: 5.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'SilkThreads', category: 'Hijabs & Scarves' },
  { id: '3', title: 'Traditional Pakistani Shalwar Kameez', price: 149.99, shippingCost: 12.99, images: ['/placeholder.jpg'], condition: 'LIKE_NEW' as const, sellerName: 'DesiVibes', category: 'Shalwar Kameez' },
  { id: '4', title: 'Wedding Lehenga with Zari Work', price: 349.99, shippingCost: 25.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'RoyalBridal', category: 'Lehenga' },
  { id: '5', title: 'Silk Saree with Gold Border', price: 199.99, shippingCost: 15.99, images: ['/placeholder.jpg'], condition: 'LIKE_NEW' as const, sellerName: 'SareeQueen', category: 'Saree' },
  { id: '6', title: "Men's Embroidered Kurta", price: 79.99, shippingCost: 7.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'KurtaKing', category: 'Kurta' },
  { id: '7', title: 'Kids Abaya Set', price: 49.99, shippingCost: 5.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'LittleModesty', category: 'Kids' },
  { id: '8', title: 'Prayer Dress Set', price: 39.99, shippingCost: 4.99, images: ['/placeholder.jpg'], condition: 'USED' as const, sellerName: 'ModestLiving', category: 'Abayas' }
]

const categories = [
  'All Categories', 'Abayas', 'Hijabs & Scarves', 'Shalwar Kameez',
  'Lehenga', 'Saree', 'Kurta', 'Thobe', 'Sherwani', 'Lawn Suits', 'Kids', 'Accessories'
]

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [sortBy, setSortBy] = useState('Price: Low to High')
  const [conditionFilter, setConditionFilter] = useState('Condition: All')
  const [sizeFilter, setSizeFilter] = useState('Size: All')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [locationFilter, setLocationFilter] = useState('United States')
  const [shippingFilter, setShippingFilter] = useState('Any')

  const filteredListings = selectedCategory === 'All Categories'
    ? allListings
    : allListings.filter(l => l.category === selectedCategory)

  const displayedListings = filteredListings.slice(0, visibleCount)
  const hasMore = visibleCount < filteredListings.length

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 6)

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-[100dvh] bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="font-serif text-4xl text-white mb-2 tracking-heading leading-heading">Browse Modest Fashion</h1>
            <p className="text-gold-light font-sans">Discover authentic modest fashion from trusted sellers</p>
          </div>

          {/* Filter Bar */}
          <div className="bg-bg-mid rounded-lg p-4 mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-wrap gap-2">
                {visibleCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md font-sans text-sm transition-fluid duration-300 ${selectedCategory === category ? 'bg-gold text-bg' : 'bg-bg text-white hover:bg-gold/20'}`}
                  >
                    {category}
                  </button>
                ))}
                <button onClick={() => setShowAllCategories(!showAllCategories)} className="px-4 py-2 rounded-md font-sans text-sm bg-bg text-white hover:bg-gold/20 transition-fluid duration-300 flex items-center gap-1">
                  {showAllCategories ? 'Less' : 'More'} <ChevronDown className={`h-4 w-4 transition-transform ${showAllCategories ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="flex flex-wrap gap-4 ml-auto">
                <div className="relative">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-bg border border-border text-white rounded-md px-4 py-2 pr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold appearance-none font-sans">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-white/50 pointer-events-none" />
                </div>

                <div className="relative">
                  <select value={conditionFilter} onChange={(e) => setConditionFilter(e.target.value)} className="bg-bg border border-border text-white rounded-md px-4 py-2 pr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold appearance-none font-sans">
                    <option>Condition: All</option>
                    <option>New</option>
                    <option>Like New</option>
                    <option>Used</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-white/50 pointer-events-none" />
                </div>

                <div className="relative">
                  <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)} className="bg-bg border border-border text-white rounded-md px-4 py-2 pr-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold appearance-none font-sans">
                    <option>Size: All</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-white/50 pointer-events-none" />
                </div>

                <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" />
                  {showFilters ? 'Hide Filters' : 'More Filters'}
                </Button>
              </div>
            </div>

            {showFilters && (
              <div className="mt-4 pt-4 border-t border-border grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gold-light font-sans mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="Min" value={priceMin} onChange={(e) => setPriceMin(e.target.value)} className="w-full px-3 py-2 bg-bg border border-border rounded-md text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" />
                    <input type="number" placeholder="Max" value={priceMax} onChange={(e) => setPriceMax(e.target.value)} className="w-full px-3 py-2 bg-bg border border-border rounded-md text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gold-light font-sans mb-2">Seller Location</label>
                  <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="w-full px-3 py-2 bg-bg border border-border rounded-md text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    <option>United States</option>
                    <option>International</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gold-light font-sans mb-2">Shipping</label>
                  <select value={shippingFilter} onChange={(e) => setShippingFilter(e.target.value)} className="w-full px-3 py-2 bg-bg border border-border rounded-md text-white font-sans text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    <option>Any</option>
                    <option>Free Shipping</option>
                    <option>Under $10</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Featured Card */}
          <div className="mb-8">
            <div className="bg-bg-light rounded-lg overflow-hidden card-shadow hover:-translate-y-[2px] hover:shadow-hover transition-fluid duration-300">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-bg-mid">
                  <div className="w-full h-full img-placeholder" />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gold text-bg rounded-md text-sm font-sans label">
                      Featured
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl text-text-dark mb-4 tracking-heading leading-heading">
                    Designer Abaya Collection
                  </h2>
                  <p className="text-text-muted mb-6 font-sans">
                    Exclusive collection of hand-embroidered abayas from renowned designers across the Middle East.
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-2xl text-text-dark">From $199</p>
                      <p className="text-sm text-text-muted font-sans">Free shipping on orders over $150</p>
                    </div>
                    <Link href="/browse?category=abayas">
                      <Button variant="primary">Shop Collection</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-white tracking-heading leading-heading">{selectedCategory === 'All Categories' ? 'All Listings' : selectedCategory}</h2>
              <p className="text-gold-light font-sans">Showing {displayedListings.length} of {filteredListings.length} results</p>
            </div>

            {displayedListings.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-2xl text-white mb-2">No listings found</p>
                <p className="text-gold-light font-sans mb-6">Try a different category or filter</p>
                <Button variant="primary" onClick={() => setSelectedCategory('All Categories')}>View All Listings</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayedListings.map((listing) => (
                  <ProductCard key={listing.id} {...listing} />
                ))}
              </div>
            )}
          </div>

          {hasMore && (
            <div className="text-center">
              <Button variant="outline" size="lg" onClick={() => setVisibleCount(prev => prev + 8)}>
                Load More
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}
