"use client"

import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import ProductCard from '@/components/listing/ProductCard'
import Link from 'next/link'
import { Heart, Share2, Star, Check, Truck, Shield, Clock } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/components/ui/Toast'

export default function ListingPage() {
  const { toast, confirm } = useToast()
  const listing = {
    id: '1',
    title: 'Embroidered Moroccan Kaftan Dress with Gold Thread',
    price: 129.99,
    shippingCost: 8.99,
    images: ['/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg', '/placeholder.jpg'],
    condition: 'NEW' as const,
    sellerName: 'ZahraDesigns',
    category: 'Abayas',
    description: `This exquisite Moroccan kaftan dress features intricate gold thread embroidery on premium quality fabric. Perfect for special occasions, weddings, or Eid celebrations.

Features:
- Hand-embroidered gold thread patterns
- Premium quality crepe fabric
- Flowy, comfortable fit
- Hidden side zipper
- Machine washable (gentle cycle)

Care Instructions:
- Hand wash recommended
- Dry flat
- Iron on low heat

This piece is part of our exclusive Moroccan collection, designed to celebrate traditional craftsmanship with modern elegance.`,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: 'Crepe',
    color: 'Emerald Green',
    occasion: 'Wedding, Eid, Formal',
    brand: 'Zahra Designs',
    quantity: 5,
    rating: 4.8,
    reviewCount: 124,
    sellerRating: 4.9,
    responseRate: 98,
    totalSales: 567
  }

  const reviews = [
    { rating: 5, comment: 'Absolutely stunning! The embroidery is even more beautiful in person.', reviewer: 'Aisha M.', date: '2 weeks ago' },
    { rating: 4, comment: 'Great quality, perfect for my sister\'s wedding. Shipping was fast.', reviewer: 'Fatima K.', date: '1 month ago' },
    { rating: 5, comment: 'The color is exactly as shown. Very comfortable and elegant.', reviewer: 'Sarah A.', date: '2 months ago' },
  ]

  const relatedListings = [
    { id: '2', title: 'Handwoven Silk Hijab Set', price: 89.99, shippingCost: 5.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'SilkThreads', category: 'Hijabs & Scarves' },
    { id: '3', title: 'Traditional Pakistani Shalwar Kameez', price: 149.99, shippingCost: 12.99, images: ['/placeholder.jpg'], condition: 'LIKE_NEW' as const, sellerName: 'DesiVibes', category: 'Shalwar Kameez' },
    { id: '4', title: 'Gold Embroidered Abaya', price: 179.99, shippingCost: 9.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'ZahraDesigns', category: 'Abayas' },
    { id: '5', title: 'Casual Moroccan Dress', price: 79.99, shippingCost: 7.99, images: ['/placeholder.jpg'], condition: 'NEW' as const, sellerName: 'ZahraDesigns', category: 'Abayas' }
  ]

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeDetailTab, setActiveDetailTab] = useState('Description')

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-gold-light font-sans text-sm">
            <a href="/" className="hover:text-gold transition-fluid duration-300">Home</a>
            <span className="mx-2 opacity-40">/</span>
            <a href="/browse" className="hover:text-gold transition-fluid duration-300">Browse</a>
            <span className="mx-2 opacity-40">/</span>
            <a href="/browse?category=abayas" className="hover:text-gold transition-fluid duration-300">Abayas</a>
            <span className="mx-2 opacity-40">/</span>
            <span className="text-white/60">{listing.title.substring(0, 30)}...</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <div>
              <div className="aspect-square bg-bg-mid rounded-md overflow-hidden mb-4 hover:-translate-y-[2px] hover:shadow-hover transition-fluid duration-300 will-transform">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-bg-light/20" />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-4">
                {listing.images.map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 bg-bg-mid rounded-md overflow-hidden hover:-translate-y-[1px] hover:shadow-md transition-fluid duration-300 will-transform cursor-pointer border border-transparent hover:border-gold/50"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gold/10 to-bg-light/10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="gold">{listing.condition}</Badge>
                  <Badge variant="success">In Stock ({listing.quantity})</Badge>
                </div>
                <h1 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-heading leading-heading">
                  {listing.title}
                </h1>
                <div className="h-px bg-border mb-4" />

                <div className="flex items-baseline gap-4 mb-6">
                  <p className="font-serif text-4xl text-gold tracking-heading leading-heading">${listing.price.toFixed(2)}</p>
                  <p className="text-gold-light/80 font-sans">+${listing.shippingCost.toFixed(2)} shipping</p>
                </div>

                {/* Size Selector */}
                <div className="mb-8">
                  <p className="label text-white mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {listing.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md text-white transition-fluid duration-300 will-transform hover:-translate-y-[1px] hover:shadow-md font-sans ${selectedSize === size ? 'border-gold bg-gold/10' : 'border-border hover:border-gold'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center border border-border rounded-md">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-white hover:bg-bg-mid transition-fluid duration-300 will-transform hover:-translate-y-[1px]">-</button>
                      <span className="px-4 py-2 text-white border-x border-border font-sans">{quantity}</span>
                      <button onClick={() => setQuantity(Math.min(listing.quantity, quantity + 1))} className="px-3 py-2 text-white hover:bg-bg-mid transition-fluid duration-300 will-transform hover:-translate-y-[1px]">+</button>
                    </div>
                    <p className="text-gold-light/80 text-sm font-sans">{listing.quantity} available</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/checkout" className="flex-1">
                      <Button variant="primary" size="lg" fullWidth>
                        Add to Cart
                      </Button>
                    </Link>
                    <Link href="/checkout" className="flex-1">
                      <Button variant="outline" size="lg" fullWidth>
                        Buy Now
                      </Button>
                    </Link>
                    <button onClick={() => setIsWishlisted(!isWishlisted)} aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'} className={`p-3 border rounded-md transition-fluid duration-300 will-transform hover:-translate-y-[1px] hover:shadow-md ${isWishlisted ? 'border-red-400 bg-red-500/10' : 'border-border hover:border-gold/50'}`}>
                      <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-400 text-red-400' : 'text-white'}`} />
                    </button>
                    <button onClick={() => navigator.clipboard?.writeText(window.location.href)} aria-label="Share listing" className="p-3 border border-border rounded-md text-white hover:bg-bg-mid hover:border-gold/50 transition-fluid duration-300 will-transform hover:-translate-y-[1px] hover:shadow-md">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Seller Card */}
                <Card className="mb-8 hover:-translate-y-[2px] hover:shadow-hover transition-fluid duration-300 will-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif text-lg text-text-dark tracking-heading leading-heading">{listing.sellerName}</h3>
                        <Badge variant="gold" size="sm">
                          <Check className="h-3 w-3 mr-1" />
                          Noor Verified
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-text-muted font-sans">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          {listing.sellerRating}
                        </span>
                        <span>{listing.totalSales} sales</span>
                        <span>{listing.responseRate}% response</span>
                      </div>
                    </div>
                    <Button variant={isFollowing ? 'outline' : 'primary'} size="sm" onClick={() => setIsFollowing(!isFollowing)} className="hover:-translate-y-[1px] hover:shadow-md focus:-translate-y-[1px] focus:shadow-md focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg">
                      {isFollowing ? 'Following' : 'Follow'}
                    </Button>
                  </div>
                  <div className="flex gap-4">
                    <Link href="/browse" className="text-sm text-gold hover:underline font-sans transition-fluid duration-300">View Shop</Link>
                    <button onClick={() => toast('Messaging coming soon', 'info')} className="text-sm text-gold hover:underline font-sans transition-fluid duration-300">Message Seller</button>
                    <button onClick={async () => { if (await confirm('Report this listing?')) toast('Report submitted', 'success') }} className="text-sm text-red-500 hover:underline font-sans ml-auto transition-fluid duration-300">Report Listing</button>
                  </div>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-bg-mid rounded-md hover:-translate-y-[1px] hover:shadow-md transition-fluid duration-300 will-transform">
                    <Truck className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Free Returns</p>
                  </div>
                  <div className="text-center p-4 bg-bg-mid rounded-md hover:-translate-y-[1px] hover:shadow-md transition-fluid duration-300 will-transform">
                    <Shield className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Buyer Protection</p>
                  </div>
                  <div className="text-center p-4 bg-bg-mid rounded-md hover:-translate-y-[1px] hover:shadow-md transition-fluid duration-300 will-transform">
                    <Clock className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Ships in 1-2 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="border-b border-border">
              <nav className="flex gap-8">
                {['Description', 'Size & Fit', 'Shipping', 'Seller Policy'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveDetailTab(tab)}
                    className={`pb-3 font-sans font-medium transition-fluid duration-300 ${activeDetailTab === tab ? 'text-gold border-b-2 border-gold' : 'text-gold-light/80 hover:text-gold'}`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeDetailTab === 'Description' && (
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/90 whitespace-pre-line font-sans leading-relaxed">{listing.description}</p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div>
                      <p className="label text-gold-light mb-2">Fabric</p>
                      <p className="text-white font-sans">{listing.fabric}</p>
                    </div>
                    <div>
                      <p className="label text-gold-light mb-2">Color</p>
                      <p className="text-white font-sans">{listing.color}</p>
                    </div>
                    <div>
                      <p className="label text-gold-light mb-2">Occasion</p>
                      <p className="text-white font-sans">{listing.occasion}</p>
                    </div>
                    <div>
                      <p className="label text-gold-light mb-2">Brand</p>
                      <p className="text-white font-sans">{listing.brand}</p>
                    </div>
                  </div>
                </div>
              )}
              {activeDetailTab === 'Size & Fit' && (
                <div className="text-white/90 font-sans">
                  <p>Available sizes: {listing.sizes.join(', ')}</p>
                  <p className="mt-4">This item runs true to size. For the best fit, we recommend ordering your usual size.</p>
                </div>
              )}
              {activeDetailTab === 'Shipping' && (
                <div className="text-white/90 font-sans">
                  <p>Shipping cost: ${listing.shippingCost.toFixed(2)}</p>
                  <p className="mt-4">Standard shipping: 5-7 business days</p>
                  <p className="mt-2">Express shipping: 2-3 business days (additional fee)</p>
                  <p className="mt-4">Free returns within 14 days of delivery.</p>
                </div>
              )}
              {activeDetailTab === 'Seller Policy' && (
                <div className="text-white/90 font-sans">
                  <p>Returns accepted within 14 days of delivery.</p>
                  <p className="mt-4">Item must be in original condition with tags attached.</p>
                  <p className="mt-2">Buyer is responsible for return shipping costs.</p>
                  <p className="mt-4">Refunds are processed within 3-5 business days after receiving the returned item.</p>
                </div>
              )}
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-white mb-8 tracking-heading leading-heading">Reviews ({listing.reviewCount})</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-center p-8 bg-bg-mid rounded-md hover:-translate-y-[2px] hover:shadow-md transition-fluid duration-300 will-transform">
                  <div className="text-5xl font-serif text-gold mb-2 tracking-heading leading-heading">{listing.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(listing.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gold-light/80 font-sans">{listing.reviewCount} reviews</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <Card key={index} className="hover:-translate-y-[1px] hover:shadow-md transition-fluid duration-300 will-transform">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'fill-gold text-gold' : 'text-border'}`}
                          />
                        ))}
                      </div>
                      <p className="text-text-dark mb-2 font-sans">{review.comment}</p>
                      <div className="flex justify-between text-sm text-text-muted font-sans">
                        <span>{review.reviewer}</span>
                        <span>{review.date}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More from this seller */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-white mb-8 tracking-heading leading-heading">More from {listing.sellerName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedListings.filter(l => l.sellerName === listing.sellerName).map((item) => (
                <ProductCard key={item.id} {...item} className="hover:-translate-y-[3px] hover:shadow-md transition-fluid duration-300 will-transform" />
              ))}
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-white mb-8 tracking-heading leading-heading">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedListings.filter(l => l.sellerName !== listing.sellerName).map((item) => (
                <ProductCard key={item.id} {...item} className="hover:-translate-y-[3px] hover:shadow-md transition-fluid duration-300 will-transform" />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
