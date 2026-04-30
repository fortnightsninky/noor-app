import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import ProductCard from '@/components/listing/ProductCard'
import { ChevronLeft, ChevronRight, Heart, Share2, Star, Check, Truck, Shield, Clock } from 'lucide-react'

export default function ListingPage() {
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
    {
      id: '2',
      title: 'Handwoven Silk Hijab Set',
      price: 89.99,
      shippingCost: 5.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'SilkThreads',
      category: 'Hijabs & Scarves'
    },
    {
      id: '3',
      title: 'Traditional Pakistani Shalwar Kameez',
      price: 149.99,
      shippingCost: 12.99,
      images: ['/placeholder.jpg'],
      condition: 'LIKE_NEW' as const,
      sellerName: 'DesiVibes',
      category: 'Shalwar Kameez'
    },
    {
      id: '4',
      title: 'Gold Embroidered Abaya',
      price: 179.99,
      shippingCost: 9.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'ZahraDesigns',
      category: 'Abayas'
    },
    {
      id: '5',
      title: 'Casual Moroccan Dress',
      price: 79.99,
      shippingCost: 7.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'ZahraDesigns',
      category: 'Abayas'
    }
  ]

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-gold-light font-sans">
              <a href="/" className="hover:text-gold">Home</a>
              <span className="mx-2">/</span>
              <a href="/browse" className="hover:text-gold">Browse</a>
              <span className="mx-2">/</span>
              <a href="/browse?category=abayas" className="hover:text-gold">Abayas</a>
              <span className="mx-2">/</span>
              <span className="text-white">{listing.title.substring(0, 30)}...</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Image Gallery */}
            <div>
              <div className="aspect-square bg-bg-mid rounded-lg overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-bg-light/20" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-4">
                {listing.images.map((_, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-20 h-20 bg-bg-mid rounded-md overflow-hidden"
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
                <h1 className="font-serif text-3xl text-white mb-4">{listing.title}</h1>
                <div className="h-px bg-border mb-4" />

                <div className="flex items-center gap-4 mb-6">
                  <p className="font-serif text-4xl text-gold">${listing.price.toFixed(2)}</p>
                  <p className="text-gold-light">+${listing.shippingCost.toFixed(2)} shipping</p>
                </div>

                {/* Size Selector */}
                <div className="mb-8">
                  <p className="font-sans font-medium text-white mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-2">
                    {listing.sizes.map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border border-border rounded-md text-white hover:border-gold hover:bg-gold/10 transition-colors font-sans"
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
                      <button className="px-3 py-2 text-white hover:bg-bg-mid">-</button>
                      <span className="px-4 py-2 text-white border-x border-border">1</span>
                      <button className="px-3 py-2 text-white hover:bg-bg-mid">+</button>
                    </div>
                    <p className="text-gold-light text-sm">{listing.quantity} available</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" fullWidth className="flex-1">
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="lg" fullWidth className="flex-1">
                      Buy Now
                    </Button>
                    <button className="p-3 border border-border rounded-md text-white hover:bg-bg-mid">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-3 border border-border rounded-md text-white hover:bg-bg-mid">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Seller Card */}
                <Card className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-serif text-lg text-text-dark">{listing.sellerName}</h3>
                        <Badge variant="gold" size="sm">
                          <Check className="h-3 w-3 mr-1" />
                          Noor Verified
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-text-muted">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          {listing.sellerRating}
                        </span>
                        <span>{listing.totalSales} sales</span>
                        <span>{listing.responseRate}% response rate</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-sm text-gold hover:underline font-sans">
                      View Shop
                    </button>
                    <button className="text-sm text-gold hover:underline font-sans">
                      Message Seller
                    </button>
                    <button className="text-sm text-red-500 hover:underline font-sans ml-auto">
                      Report Listing
                    </button>
                  </div>
                </Card>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-bg-mid rounded-md">
                    <Truck className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Free Returns</p>
                  </div>
                  <div className="text-center p-4 bg-bg-mid rounded-md">
                    <Shield className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Buyer Protection</p>
                  </div>
                  <div className="text-center p-4 bg-bg-mid rounded-md">
                    <Clock className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-white font-sans">Ships in 1-2 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-12">
            <div className="border-b border-border">
              <nav className="flex gap-8">
                {['Description', 'Size & Fit', 'Shipping', 'Seller Policy'].map((tab) => (
                  <button
                    key={tab}
                    className={`pb-3 font-sans font-medium ${tab === 'Description' ? 'text-gold border-b-2 border-gold' : 'text-gold-light hover:text-gold'}`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-white whitespace-pre-line">{listing.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <p className="font-sans font-medium text-gold-light mb-2">Fabric</p>
                    <p className="text-white">{listing.fabric}</p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gold-light mb-2">Color</p>
                    <p className="text-white">{listing.color}</p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gold-light mb-2">Occasion</p>
                    <p className="text-white">{listing.occasion}</p>
                  </div>
                  <div>
                    <p className="font-sans font-medium text-gold-light mb-2">Brand</p>
                    <p className="text-white">{listing.brand}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-white mb-6">Reviews ({listing.reviewCount})</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <div className="text-center p-6 bg-bg-mid rounded-lg">
                  <div className="text-5xl font-serif text-gold mb-2">{listing.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < Math.floor(listing.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gold-light">{listing.reviewCount} reviews</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'fill-gold text-gold' : 'text-border'}`}
                          />
                        ))}
                      </div>
                      <p className="text-text-dark mb-2">{review.comment}</p>
                      <div className="flex justify-between text-sm text-text-muted">
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
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-white mb-6">More from {listing.sellerName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedListings.filter(l => l.sellerName === listing.sellerName).map((listing) => (
                <ProductCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>

          {/* You may also like */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl text-white mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedListings.filter(l => l.sellerName !== listing.sellerName).map((listing) => (
                <ProductCard key={listing.id} {...listing} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}