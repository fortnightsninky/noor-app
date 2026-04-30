import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import ProductCard from '@/components/listing/ProductCard'
import { TrendingUp, Package, DollarSign, Users, ShoppingBag, Settings, Upload, MoreVertical, Edit, Pause, Trash2, Copy, BarChart3, Vacation, CreditCard, Target } from 'lucide-react'
import { useState } from 'react'

export default function SellerDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'listings' | 'payouts'>('overview')
  const [ordersTab, setOrdersTab] = useState<'new' | 'processing' | 'shipped' | 'completed'>('new')
  const [vacationMode, setVacationMode] = useState(false)

  const stats = [
    { label: "Today's Sales", value: '$342.50', change: '+12%', icon: DollarSign, color: 'gold' },
    { label: 'Pending Orders', value: '8', change: '-2', icon: Package, color: 'blue' },
    { label: 'Total Earnings', value: '$8,452.20', change: '+24%', icon: TrendingUp, color: 'green' },
    { label: 'Active Listings', value: '42', change: '+5', icon: ShoppingBag, color: 'purple' }
  ]

  const orders = {
    new: [
      { id: 'ORD-1001', customer: 'Aisha M.', items: 2, total: 189.98, date: 'Today, 10:30 AM' },
      { id: 'ORD-1002', customer: 'Fatima K.', items: 1, total: 129.99, date: 'Today, 09:15 AM' },
      { id: 'ORD-1003', customer: 'Sarah A.', items: 3, total: 267.97, date: 'Yesterday, 4:45 PM' }
    ],
    processing: [
      { id: 'ORD-0998', customer: 'Noor H.', items: 1, total: 89.99, date: '2 days ago' },
      { id: 'ORD-0997', customer: 'Zainab R.', items: 2, total: 219.98, date: '3 days ago' }
    ],
    shipped: [
      { id: 'ORD-0995', customer: 'Maryam S.', items: 1, total: 149.99, date: '5 days ago', tracking: 'USPS 9405503699300098765432' },
      { id: 'ORD-0994', customer: 'Hana K.', items: 3, total: 389.97, date: '6 days ago', tracking: 'FedEx 784569874512' }
    ],
    completed: [
      { id: 'ORD-0990', customer: 'Layla A.', items: 2, total: 179.98, date: '2 weeks ago', rating: 5 },
      { id: 'ORD-0989', customer: 'Yasmin M.', items: 1, total: 79.99, date: '2 weeks ago', rating: 4 }
    ]
  }

  const listings = [
    {
      id: '1',
      title: 'Embroidered Moroccan Kaftan Dress',
      price: 129.99,
      shippingCost: 8.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'You',
      category: 'Abayas',
      status: 'active',
      views: 245,
      sales: 12
    },
    {
      id: '2',
      title: 'Handwoven Silk Hijab Set',
      price: 89.99,
      shippingCost: 5.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'You',
      category: 'Hijabs & Scarves',
      status: 'active',
      views: 187,
      sales: 8
    },
    {
      id: '3',
      title: 'Traditional Pakistani Shalwar Kameez',
      price: 149.99,
      shippingCost: 12.99,
      images: ['/placeholder.jpg'],
      condition: 'LIKE_NEW' as const,
      sellerName: 'You',
      category: 'Shalwar Kameez',
      status: 'paused',
      views: 98,
      sales: 3
    },
    {
      id: '4',
      title: 'Wedding Lehenga with Zari Work',
      price: 349.99,
      shippingCost: 25.99,
      images: ['/placeholder.jpg'],
      condition: 'NEW' as const,
      sellerName: 'You',
      category: 'Lehenga',
      status: 'pending',
      views: 56,
      sales: 0
    }
  ]

  const lifetimeGMV = 8452.20
  const loyaltyProgress = (lifetimeGMV / 10000) * 100 // Progress toward $10K for 10% commission

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-serif text-3xl text-white mb-2">Seller Dashboard</h1>
                <p className="text-gold-light">Welcome back, ZahraDesigns</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Bulk Upload
                </Button>
                <Button variant="primary">
                  <Plus className="h-4 w-4 mr-2" />
                  New Listing
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${stat.color}/10 rounded-md`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}`} />
                  </div>
                  <span className={`text-sm font-sans ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-serif text-text-dark mb-1">{stat.value}</p>
                <p className="text-sm text-text-muted font-sans">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-border">
              <nav className="flex gap-8">
                {[
                  { id: 'overview', label: 'Overview', icon: BarChart3 },
                  { id: 'orders', label: 'Orders', icon: Package },
                  { id: 'listings', label: 'Listings', icon: ShoppingBag },
                  { id: 'payouts', label: 'Payouts', icon: CreditCard }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-3 font-sans font-medium flex items-center gap-2 ${activeTab === tab.id ? 'text-gold border-b-2 border-gold' : 'text-gold-light hover:text-gold'}`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Orders Summary */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-text-dark">Recent Orders</h2>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Order ID</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Items</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Total</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.new.map(order => (
                        <tr key={order.id} className="border-b border-border last:border-0">
                          <td className="py-3 px-4 font-sans text-text-dark">{order.id}</td>
                          <td className="py-3 px-4 font-sans text-text-dark">{order.customer}</td>
                          <td className="py-3 px-4 font-sans text-text-dark">{order.items}</td>
                          <td className="py-3 px-4 font-serif text-text-dark">${order.total}</td>
                          <td className="py-3 px-4 font-sans text-text-muted">{order.date}</td>
                          <td className="py-3 px-4">
                            <Badge variant="gold" size="sm">New</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="sm">Process</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Listings Performance */}
              <div className="grid lg:grid-cols-3 gap-8">
                <Card className="p-6 lg:col-span-2">
                  <h2 className="font-serif text-xl text-text-dark mb-6">Listing Performance</h2>
                  <div className="space-y-4">
                    {listings.slice(0, 3).map(listing => (
                      <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-md">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-bg-mid rounded-md" />
                          <div>
                            <h3 className="font-serif text-text-dark">{listing.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-text-muted font-sans">
                              <span>{listing.views} views</span>
                              <span>{listing.sales} sales</span>
                              <Badge variant={listing.status === 'active' ? 'success' : listing.status === 'paused' ? 'warning' : 'default'} size="sm">
                                {listing.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-text-muted hover:text-text-dark">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-text-muted hover:text-text-dark">
                            <MoreVertical className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Loyalty Progress */}
                <Card className="p-6">
                  <h2 className="font-serif text-xl text-text-dark mb-6 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Loyalty Discount
                  </h2>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm font-sans mb-2">
                      <span className="text-text-muted">Progress to 10% commission</span>
                      <span className="text-text-dark">${lifetimeGMV.toFixed(2)} / $10,000</span>
                    </div>
                    <div className="h-3 bg-bg-mid rounded-full overflow-hidden">
                      <div
                        className="h-full gold-gradient rounded-full"
                        style={{ width: `${Math.min(loyaltyProgress, 100)}%` }}
                      />
                    </div>
                    <p className="text-sm text-text-muted mt-3 font-sans">
                      Reach $10,000 lifetime GMV to qualify for 10% commission rate (down from 12%).
                    </p>
                  </div>

                  {/* Vacation Mode */}
                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-lg text-text-dark flex items-center gap-2">
                        <Vacation className="h-5 w-5" />
                        Vacation Mode
                      </h3>
                      <button
                        onClick={() => setVacationMode(!vacationMode)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${vacationMode ? 'bg-gold' : 'bg-bg-mid'}`}
                      >
                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${vacationMode ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                    <p className="text-sm text-text-muted font-sans">
                      {vacationMode
                        ? 'Your shop is in vacation mode. New orders are paused.'
                        : 'Turn on vacation mode to pause new orders while you\'re away.'}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <Card className="p-6">
              <div className="mb-6">
                <div className="flex gap-4">
                  {(['new', 'processing', 'shipped', 'completed'] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setOrdersTab(tab)}
                      className={`px-4 py-2 rounded-md font-sans capitalize ${ordersTab === tab ? 'bg-gold text-bg' : 'bg-bg-light text-text-dark hover:bg-bg-mid'}`}
                    >
                      {tab} ({orders[tab].length})
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Order ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Items</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Total</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Date</th>
                      {ordersTab === 'shipped' && (
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Tracking</th>
                      )}
                      {ordersTab === 'completed' && (
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Rating</th>
                      )}
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-muted font-sans">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders[ordersTab].map(order => (
                      <tr key={order.id} className="border-b border-border last:border-0">
                        <td className="py-3 px-4 font-sans text-text-dark">{order.id}</td>
                        <td className="py-3 px-4 font-sans text-text-dark">{order.customer}</td>
                        <td className="py-3 px-4 font-sans text-text-dark">{order.items}</td>
                        <td className="py-3 px-4 font-serif text-text-dark">${order.total}</td>
                        <td className="py-3 px-4 font-sans text-text-muted">{order.date}</td>
                        {ordersTab === 'shipped' && (
                          <td className="py-3 px-4 font-sans text-text-muted text-sm">
                            {'tracking' in order ? order.tracking : 'N/A'}
                          </td>
                        )}
                        {ordersTab === 'completed' && (
                          <td className="py-3 px-4">
                            {'rating' in order && (
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`h-3 w-3 ${i < (order as any).rating ? 'bg-gold' : 'bg-border'}`}
                                  />
                                ))}
                              </div>
                            )}
                          </td>
                        )}
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {ordersTab === 'new' && (
                              <Button variant="primary" size="sm">Confirm</Button>
                            )}
                            {ordersTab === 'processing' && (
                              <Button variant="primary" size="sm">Mark Shipped</Button>
                            )}
                            {ordersTab === 'shipped' && (
                              <Button variant="outline" size="sm">Tracking</Button>
                            )}
                            <button className="p-1 text-text-muted hover:text-text-dark">
                              <MoreVertical className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}

          {/* Listings Tab */}
          {activeTab === 'listings' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-4">
                  <Button variant={listings.some(l => l.status === 'pending') ? 'primary' : 'outline'}>
                    Pending ({listings.filter(l => l.status === 'pending').length})
                  </Button>
                  <Button variant="outline">
                    Active ({listings.filter(l => l.status === 'active').length})
                  </Button>
                  <Button variant="outline">
                    Paused ({listings.filter(l => l.status === 'paused').length})
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Duplicate
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    CSV Upload
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {listings.map(listing => (
                  <div key={listing.id} className="relative">
                    <ProductCard {...listing} />
                    <div className="absolute top-3 right-3 flex gap-1">
                      <button className="p-1.5 bg-white/90 rounded hover:bg-white">
                        <Edit className="h-3.5 w-3.5 text-text-muted" />
                      </button>
                      <button className="p-1.5 bg-white/90 rounded hover:bg-white">
                        <Pause className="h-3.5 w-3.5 text-text-muted" />
                      </button>
                      <button className="p-1.5 bg-white/90 rounded hover:bg-white">
                        <Trash2 className="h-3.5 w-3.5 text-text-muted" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Payouts Tab */}
          {activeTab === 'payouts' && (
            <Card className="p-6">
              <h2 className="font-serif text-xl text-text-dark mb-6">Payout Settings</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-lg text-text-dark mb-4">Stripe Connect Status</h3>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-sans font-medium text-green-800">Connected</span>
                    </div>
                    <p className="text-sm text-green-700 font-sans">
                      Your Stripe Connect account is active and ready to receive payouts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-text-dark font-sans mb-1">Next Payout</p>
                      <p className="font-serif text-xl text-text-dark">$342.50</p>
                      <p className="text-sm text-text-muted font-sans">Estimated payout date: May 5, 2026</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark font-sans mb-1">Payout Schedule</p>
                      <p className="text-text-dark font-sans">3 days after delivery confirmation</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-text-dark mb-4">Payout History</h3>
                  <div className="space-y-4">
                    {[
                      { id: 'PYT-1001', amount: 245.60, date: 'Apr 25, 2026', status: 'Paid' },
                      { id: 'PYT-1000', amount: 189.75, date: 'Apr 18, 2026', status: 'Paid' },
                      { id: 'PYT-0999', amount: 312.40, date: 'Apr 11, 2026', status: 'Paid' }
                    ].map(payout => (
                      <div key={payout.id} className="flex items-center justify-between p-4 border border-border rounded-md">
                        <div>
                          <p className="font-sans font-medium text-text-dark">{payout.id}</p>
                          <p className="text-sm text-text-muted font-sans">{payout.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-serif text-lg text-text-dark">${payout.amount}</p>
                          <Badge variant="success" size="sm">{payout.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" fullWidth className="mt-4">
                    View All Payouts
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}