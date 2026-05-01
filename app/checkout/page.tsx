"use client"

import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import { ShoppingCart, Truck, Shield, CreditCard, Apple, MapPin, Plus } from 'lucide-react'
import { useState } from 'react'

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card')
  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: ''
  })

  const cartItems = [
    { id: '1', title: 'Embroidered Moroccan Kaftan Dress', price: 129.99, shippingCost: 8.99, size: 'M', quantity: 1, image: '/placeholder.jpg', seller: 'ZahraDesigns' },
    { id: '2', title: 'Handwoven Silk Hijab Set', price: 89.99, shippingCost: 5.99, size: 'One Size', quantity: 2, image: '/placeholder.jpg', seller: 'SilkThreads' }
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = cartItems.reduce((sum, item) => sum + (item.shippingCost * item.quantity), 0)
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const savedAddresses = [
    { id: '1', name: 'Home', address: '123 Main St, Brooklyn, NY 11201', isDefault: true },
    { id: '2', name: 'Work', address: '456 Office Ave, Manhattan, NY 10001', isDefault: false }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Checkout:', { address, paymentMethod, total })
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-white mb-2 tracking-heading leading-heading">Checkout</h1>
            <p className="text-gold-light font-sans">Complete your purchase</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {/* Shipping Address */}
                <Card className="p-6 mb-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Shipping Address
                  </h2>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-text-dark font-sans mb-3">Select saved address</p>
                    <div className="space-y-3">
                      {savedAddresses.map(addr => (
                        <div
                          key={addr.id}
                          className={`p-4 border rounded-md cursor-pointer transition-fluid duration-300 ${addr.isDefault ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'}`}
                          onClick={() => {}}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-sans font-medium text-text-dark">{addr.name}</span>
                              {addr.isDefault && (
                                <Badge variant="gold" size="sm">Default</Badge>
                              )}
                            </div>
                            <button type="button" className="text-sm text-gold hover:underline font-sans">
                              Edit
                            </button>
                          </div>
                          <p className="text-text-muted text-sm">{addr.address}</p>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="w-full p-4 border border-dashed border-border rounded-md text-center hover:border-gold transition-fluid duration-300"
                      >
                        <div className="flex items-center justify-center gap-2 text-gold">
                          <Plus className="h-4 w-4" />
                          <span className="font-sans">Add New Address</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Full Name" value={address.fullName} onChange={(e) => setAddress({ ...address, fullName: e.target.value })} required />
                    <Input label="Phone Number" type="tel" value={address.phone} onChange={(e) => setAddress({ ...address, phone: e.target.value })} required />
                    <Input label="Street Address" value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} required />
                    <Input label="City" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} required />
                    <Input label="State" value={address.state} onChange={(e) => setAddress({ ...address, state: e.target.value })} required />
                    <Input label="ZIP Code" value={address.zipCode} onChange={(e) => setAddress({ ...address, zipCode: e.target.value })} required />
                  </div>
                </Card>

                {/* Payment Method */}
                <Card className="p-6 mb-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6 tracking-heading leading-heading flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div
                      className={`p-4 border rounded-md cursor-pointer transition-fluid duration-300 ${paymentMethod === 'card' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-gold" />
                          <span className="font-sans font-medium text-text-dark">Credit/Debit Card</span>
                        </div>
                        {paymentMethod === 'card' && (
                          <div className="w-5 h-5 rounded-full border-4 border-gold" />
                        )}
                      </div>
                      {paymentMethod === 'card' && (
                        <div className="space-y-4">
                          <Input label="Card Number" placeholder="1234 5678 9012 3456" required />
                          <div className="grid md:grid-cols-3 gap-4">
                            <Input label="Expiry Date" placeholder="MM/YY" required />
                            <Input label="CVC" placeholder="123" required />
                            <Input label="ZIP Code" placeholder="12345" required />
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`p-4 border rounded-md cursor-pointer transition-fluid duration-300 ${paymentMethod === 'apple' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'}`}
                      onClick={() => setPaymentMethod('apple')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Apple className="h-5 w-5 text-text-dark" />
                          <span className="font-sans font-medium text-text-dark">Apple Pay</span>
                        </div>
                        {paymentMethod === 'apple' && (
                          <div className="w-5 h-5 rounded-full border-4 border-gold" />
                        )}
                      </div>
                    </div>

                    <div
                      className={`p-4 border rounded-md cursor-pointer transition-fluid duration-300 ${paymentMethod === 'google' ? 'border-gold bg-gold/5' : 'border-border hover:border-gold/50'}`}
                      onClick={() => setPaymentMethod('google')}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-5 w-5 bg-text-dark rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">G</span>
                          </div>
                          <span className="font-sans font-medium text-text-dark">Google Pay</span>
                        </div>
                        {paymentMethod === 'google' && (
                          <div className="w-5 h-5 rounded-full border-4 border-gold" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-bg-mid rounded-md">
                    <p className="text-sm text-white font-sans">
                      <span className="text-gold">Note:</span> Sales tax will be automatically calculated by Stripe Tax based on your shipping address.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Right Column: Order Summary */}
              <div>
                <Card className="p-6 sticky top-8">
                  <h2 className="font-serif text-xl text-text-dark mb-6 tracking-heading leading-heading flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Order Summary
                  </h2>

                  <div className="mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 mb-4 pb-4 border-b border-border last:border-0">
                        <div className="w-16 h-16 bg-bg-mid rounded-md flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-bg-light/20" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-sm text-text-dark mb-1 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-xs text-text-muted font-sans mb-1">
                            Size: {item.size} &bull; Qty: {item.quantity}
                          </p>
                          <p className="text-xs text-text-muted font-sans">
                            Seller: {item.seller}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-serif text-sm text-text-dark">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-text-muted font-sans">
                            +${(item.shippingCost * item.quantity).toFixed(2)} shipping
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-text-muted font-sans">Subtotal</span>
                      <span className="font-sans text-text-dark">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted font-sans">Shipping</span>
                      <span className="font-sans text-text-dark">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted font-sans">Tax (Estimated)</span>
                      <span className="font-sans text-text-dark">${tax.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-border my-4" />
                    <div className="flex justify-between">
                      <span className="font-serif text-lg text-text-dark">Total</span>
                      <span className="font-serif text-2xl text-gold">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-bg-mid rounded-md">
                    <p className="text-sm text-white font-sans">
                      <span className="text-gold">12% commission</span> will be deducted for Noor platform fees. Seller receives 88%.
                    </p>
                  </div>

                  <div className="flex gap-4 mb-6">
                    <div className="flex-1 text-center p-3 bg-bg-mid rounded-md">
                      <Shield className="h-6 w-6 text-gold mx-auto mb-2" />
                      <p className="text-xs text-white font-sans">Buyer Protection</p>
                    </div>
                    <div className="flex-1 text-center p-3 bg-bg-mid rounded-md">
                      <Truck className="h-6 w-6 text-gold mx-auto mb-2" />
                      <p className="text-xs text-white font-sans">Tracked Shipping</p>
                    </div>
                  </div>

                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Place Order &bull; ${total.toFixed(2)}
                  </Button>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-text-muted font-sans">
                      By placing your order, you agree to our{' '}
                      <a href="/terms" className="text-gold hover:underline transition-fluid duration-300">
                        Terms of Service
                      </a>
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
