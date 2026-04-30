import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Badge from '@/components/ui/Badge'
import ProductCard from '@/components/listing/ProductCard'
import { User, MapPin, ShoppingBag, Heart, Users, Bell, Moon, LogOut, Edit, Plus, Star, Package, Truck, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist' | 'following' | 'notifications' | 'settings'>('profile')
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto')

  const user = {
    name: 'Aisha Mohammed',
    email: 'aisha@example.com',
    joined: 'March 2025',
    avatar: '/placeholder.jpg',
    stats: {
      orders: 12,
      wishlist: 8,
      following: 24
    }
  }

  const addresses = [
    {
      id: '1',
      name: 'Home',
      address: '123 Main Street\nBrooklyn, NY 11201\nUnited States',
      phone: '(555) 123-4567',
      isDefault: true
    },
    {
      id: '2',
      name: 'Work',
      address: '456 Office Avenue\nManhattan, NY 10001\nUnited States',
      phone: '(555) 987-6543',
      isDefault: false
    }
  ]

  const orders = [
    {
      id: 'ORD-1001',
      date: 'Apr 25, 2026',
      items: 2,
      total: 189.98,
      status: 'delivered',
      tracking: 'USPS 9405503699300098765432',
      itemsList: [
        { name: 'Embroidered Moroccan Kaftan Dress', seller: 'ZahraDesigns' },
        { name: 'Silk Hijab Set', seller: 'SilkThreads' }
      ]
    },
    {
      id: 'ORD-0998',
      date: 'Apr 18, 2026',
      items: 1,
      total: 129.99,
      status: 'delivered',
      tracking: 'FedEx 784569874512',
      itemsList: [
        { name: 'Traditional Shalwar Kameez', seller: 'DesiVibes' }
      ]
    },
    {
      id: 'ORD-0995',
      date: 'Apr 10, 2026',
      items: 3,
      total: 267.97,
      status: 'shipped',
      tracking: 'USPS 9405503699300098765433',
      itemsList: [
        { name: 'Wedding Lehenga', seller: 'RoyalBridal' },
        { name: 'Gold Earrings', seller: 'JewelCraft' },
        { name: 'Prayer Dress', seller: 'ModestLiving' }
      ]
    }
  ]

  const wishlistItems = [
    {
      id: '1',
      title: 'Designer Abaya with Crystal Work',
      price: 299.99,
      shippingCost: 15.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'LuxeModesty',
      category: 'Abayas'
    },
    {
      id: '2',
      title: 'Hand-Embroidered Saree',
      price: 249.99,
      shippingCost: 12.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'SareeQueen',
      category: 'Saree'
    },
    {
      id: '3',
      title: 'Men\'s Formal Sherwani',
      price: 399.99,
      shippingCost: 25.99,
      images: ['/placeholder.jpg'],
      condition: 'LIKE_NEW' as const,
      sellerName: 'RoyalAttire',
      category: 'Sherwani'
    },
    {
      id: '4',
      title: 'Kids Eid Outfit Set',
      price: 89.99,
      shippingCost: 8.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'LittleModesty',
      category: 'Kids'
    }
  ]

  const following = [
    { id: '1', name: 'ZahraDesigns', items: 42, rating: 4.9, isFollowing: true },
    { id: '2', name: 'SilkThreads', items: 28, rating: 4.8, isFollowing: true },
    { id: '3', name: 'DesiVibes', items: 56, rating: 4.7, isFollowing: true },
    { id: '4', name: 'RoyalBridal', items: 19, rating: 5.0, isFollowing: true }
  ]

  const notificationSettings = {
    email: {
      orderUpdates: true,
      newListings: true,
      priceDrops: false,
      promotions: true,
      newsletter: true
    },
    push: {
      orderUpdates: true,
      newMessages: true,
      wishlistUpdates: false,
      followingActivity: true
    }
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-white mb-2">My Account</h1>
            <p className="text-gold-light">Manage your profile, orders, and preferences</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div>
              <Card className="p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl text-text-dark">{user.name}</h2>
                    <p className="text-sm text-text-muted font-sans">{user.email}</p>
                    <p className="text-xs text-text-muted font-sans">Member since {user.joined}</p>
                  </div>
                </div>

                <div className="space-y-1">
                  {[
                    { id: 'profile', label: 'Profile', icon: User, count: null },
                    { id: 'orders', label: 'Orders', icon: ShoppingBag, count: user.stats.orders },
                    { id: 'wishlist', label: 'Wishlist', icon: Heart, count: user.stats.wishlist },
                    { id: 'following', label: 'Following', icon: Users, count: user.stats.following },
                    { id: 'notifications', label: 'Notifications', icon: Bell, count: null },
                    { id: 'settings', label: 'Settings', icon: Moon, count: null }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id as any)}
                      className={`w-full flex items-center justify-between p-3 rounded-md font-sans ${activeTab === item.id ? 'bg-gold/10 text-gold' : 'text-text-dark hover:bg-bg-mid/10'}`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </div>
                      {item.count !== null && (
                        <Badge variant="default" size="sm">{item.count}</Badge>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-md font-sans">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-xl text-text-dark">Personal Information</h2>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        value={user.name}
                        readOnly
                      />
                      <Input
                        label="Email Address"
                        value={user.email}
                        readOnly
                      />
                      <Input
                        label="Phone Number"
                        value="(555) 123-4567"
                        readOnly
                      />
                      <Input
                        label="Date of Birth"
                        value="January 15, 1990"
                        readOnly
                      />
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="font-serif text-xl text-text-dark flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        Saved Addresses
                      </h2>
                      <Button variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Add New
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {addresses.map(address => (
                        <div
                          key={address.id}
                          className={`p-4 border rounded-md ${address.isDefault ? 'border-gold bg-gold/5' : 'border-border'}`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-sans font-medium text-text-dark">{address.name}</span>
                              {address.isDefault && (
                                <Badge variant="gold" size="sm">Default</Badge>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <button className="text-sm text-gold hover:underline font-sans">Edit</button>
                              {!address.isDefault && (
                                <button className="text-sm text-red-500 hover:underline font-sans">Remove</button>
                              )}
                            </div>
                          </div>
                          <p className="text-text-muted whitespace-pre-line text-sm mb-2">{address.address}</p>
                          <p className="text-text-muted text-sm">{address.phone}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <Card className="p-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6">Order History</h2>
                  <div className="space-y-6">
                    {orders.map(order => (
                      <div key={order.id} className="border border-border rounded-md overflow-hidden">
                        <div className="bg-bg-mid p-4 flex items-center justify-between">
                          <div>
                            <p className="font-sans font-medium text-white">Order #{order.id}</p>
                            <p className="text-sm text-gold-light font-sans">{order.date} • {order.items} item{order.items > 1 ? 's' : ''}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-serif text-xl text-gold">${order.total}</p>
                            <Badge
                              variant={order.status === 'delivered' ? 'success' : order.status === 'shipped' ? 'gold' : 'default'}
                              size="sm"
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="mb-4">
                            <p className="text-sm font-medium text-text-dark font-sans mb-2">Items:</p>
                            <ul className="space-y-1">
                              {order.itemsList.map((item, index) => (
                                <li key={index} className="text-sm text-text-muted font-sans">
                                  • {item.name} ({item.seller})
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Truck className="h-4 w-4 text-text-muted" />
                              <span className="text-sm text-text-muted font-sans">{order.tracking}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Track Order</Button>
                              {order.status === 'delivered' && (
                                <Button variant="outline" size="sm">Leave Review</Button>
                              )}
                              <Button variant="outline" size="sm">Reorder</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">View All Orders</Button>
                  </div>
                </Card>
              )}

              {/* Wishlist Tab */}
              {activeTab === 'wishlist' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-xl text-text-dark">My Wishlist</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Share List</Button>
                      <Button variant="outline" size="sm">Clear All</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wishlistItems.map(item => (
                      <ProductCard key={item.id} {...item} isWishlisted={true} />
                    ))}
                  </div>
                </div>
              )}

              {/* Following Tab */}
              {activeTab === 'following' && (
                <Card className="p-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6">Shops You Follow</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {following.map(shop => (
                      <div key={shop.id} className="border border-border rounded-md p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                              <User className="h-6 w-6 text-gold" />
                            </div>
                            <div>
                              <h3 className="font-serif text-lg text-text-dark">{shop.name}</h3>
                              <div className="flex items-center gap-4 text-sm text-text-muted font-sans">
                                <span>{shop.items} items</span>
                                <span className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-gold text-gold" />
                                  {shop.rating}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button
                            variant={shop.isFollowing ? 'outline' : 'primary'}
                            size="sm"
                          >
                            {shop.isFollowing ? 'Following' : 'Follow'}
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" fullWidth>
                            View Shop
                          </Button>
                          <Button variant="ghost" size="sm" fullWidth>
                            Message
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <Card className="p-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6">Notification Preferences</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-serif text-lg text-text-dark mb-4 flex items-center gap-2">
                        <Bell className="h-5 w-5" />
                        Email Notifications
                      </h3>
                      <div className="space-y-4">
                        {Object.entries(notificationSettings.email).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="font-sans text-text-dark capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </span>
                            <button
                              onClick={() => {/* Toggle setting */}}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full ${value ? 'bg-gold' : 'bg-bg-mid'}`}
                            >
                              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${value ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-text-dark mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        {Object.entries(notificationSettings.push).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between">
                            <span className="font-sans text-text-dark capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                            </span>
                            <button
                              onClick={() => {/* Toggle setting */}}
                              className={`relative inline-flex h-6 w-11 items-center rounded-full ${value ? 'bg-gold' : 'bg-bg-mid'}`}
                            >
                              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${value ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <Card className="p-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6">Account Settings</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-serif text-lg text-text-dark mb-4 flex items-center gap-2">
                        <Moon className="h-5 w-5" />
                        Theme Preferences
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {(['light', 'dark', 'auto'] as const).map(themeOption => (
                          <button
                            key={themeOption}
                            onClick={() => setTheme(themeOption)}
                            className={`p-4 border rounded-md text-center ${theme === themeOption ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/50'}`}
                          >
                            <div className="font-serif text-lg text-text-dark mb-1 capitalize">
                              {themeOption}
                            </div>
                            <p className="text-sm text-text-muted font-sans">
                              {themeOption === 'light' ? 'Light mode' :
                               themeOption === 'dark' ? 'Dark mode' :
                               'Follow system'}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-text-dark mb-4">Privacy & Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-sans font-medium text-text-dark">Two-Factor Authentication</p>
                            <p className="text-sm text-text-muted font-sans">Add an extra layer of security</p>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-sans font-medium text-text-dark">Data Export</p>
                            <p className="text-sm text-text-muted font-sans">Download your personal data</p>
                          </div>
                          <Button variant="outline" size="sm">Request</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-sans font-medium text-text-dark">Account Deletion</p>
                            <p className="text-sm text-text-muted font-sans">Permanently delete your account</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-50">
                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg text-text-dark mb-4">Language & Region</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-text-dark font-sans mb-2">
                            Language
                          </label>
                          <select className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans">
                            <option>English</option>
                            <option>Arabic</option>
                            <option>Urdu</option>
                            <option>French</option>
                            <option>Spanish</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-dark font-sans mb-2">
                            Currency
                          </label>
                          <select className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans">
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>GBP (£)</option>
                            <option>CAD ($)</option>
                            <option>AUD ($)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}