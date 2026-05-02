"use client"

import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { Upload, Image, Video, Sparkles, X, Plus, DollarSign, Package, Scissors, Palette, Calendar, Award, UploadCloud } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/components/ui/Toast'

export default function CreateListingPage() {
  const { toast } = useToast()
  const [mode, setMode] = useState<'simple' | 'advanced'>('simple')
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    subcategory: '',
    condition: 'NEW',
    price: '',
    shippingCost: '',
    description: '',
    fabric: '',
    color: '',
    occasion: '',
    brand: '',
    sizes: [] as string[],
    quantity: '1',
    dispatchTime: '1-2',
    returnPolicy: '14'
  })

  const categories = [
    'Abayas', 'Hijabs & Scarves', 'Shalwar Kameez', 'Lehenga', 'Saree',
    'Kurta', 'Thobe', 'Sherwani', 'Lawn Suits', 'Kids', 'Accessories'
  ]

  const subcategories: Record<string, string[]> = {
    'Abayas': ['Open Front', 'Closed', 'Embroidered', 'Casual', 'Formal'],
    'Hijabs & Scarves': ['Jersey', 'Chiffon', 'Satin', 'Printed', 'Instant'],
    'Shalwar Kameez': ['Casual', 'Formal', 'Embroidered', 'Lawn', 'Silk'],
    'Lehenga': ['Bridal', 'Party Wear', 'Semi-Formal'],
    'Saree': ['Silk', 'Cotton', 'Georgette', 'Party Wear'],
    'Kurta': ["Men's", "Women's", "Kids'"],
    'Thobe': ["Men's", "Kids'"],
    'Sherwani': ['Wedding', 'Formal'],
    'Lawn Suits': ['Unstitched', 'Stitched', 'Embroidered'],
    'Kids': ['Girls', 'Boys', 'Baby'],
    'Accessories': ['Jewelry', 'Bags', 'Shoes', 'Kufis', 'Prayer Items']
  }

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'Custom']

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file))
      setImages([...images, ...newImages].slice(0, 8))
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const handleSizeToggle = (size: string) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }))
  }

  const generateDescription = () => {
    const aiDescription = `This beautiful ${formData.category.toLowerCase()} features ${formData.fabric ? formData.fabric.toLowerCase() + ' fabric' : 'premium quality fabric'} with ${formData.color ? formData.color.toLowerCase() + ' color' : 'elegant coloring'}. Perfect for ${formData.occasion || 'special occasions'}.`
    setFormData(prev => ({
      ...prev,
      description: prev.description ? prev.description + '\n\n' + aiDescription : aiDescription
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast('Listing submitted for approval!', 'success')
  }

  const handleSaveDraft = () => {
    toast('Draft saved!', 'success')
  }

  const handleDuplicate = () => {
    toast('Listing duplicated!', 'success')
  }

  const handleVideoUpload = () => {
    toast('Video upload coming soon', 'info')
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl text-white mb-2 tracking-heading leading-heading">Create New Listing</h1>
            <p className="text-gold-light font-sans">List your modest fashion items for sale</p>
          </div>

          <div className="mb-8">
            <div className="inline-flex rounded-md bg-bg-mid p-1">
              <button
                onClick={() => setMode('simple')}
                className={`px-6 py-2 rounded-md font-sans transition-fluid duration-300 ${mode === 'simple' ? 'bg-gold text-bg' : 'text-white hover:bg-bg'}`}
              >
                Simple
              </button>
              <button
                onClick={() => setMode('advanced')}
                className={`px-6 py-2 rounded-md font-sans transition-fluid duration-300 ${mode === 'advanced' ? 'bg-gold text-bg' : 'text-white hover:bg-bg'}`}
              >
                Advanced
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-6 mb-6">
                  <h2 className="font-serif text-xl text-text-dark mb-4 flex items-center gap-2">
                    <Image className="h-5 w-5" />
                    Photos & Video
                  </h2>
                  <p className="text-text-muted text-sm mb-6 font-sans">
                    Upload up to 8 photos. Add a video to increase engagement.
                  </p>

                  <div className="mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative aspect-square bg-bg-mid rounded-md overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-gold/20 to-bg-light/20" />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70 transition-fluid duration-300"
                            aria-label="Remove image"
                          >
                            <X className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      ))}
                      {images.length < 8 && (
                        <label className="aspect-square border-2 border-dashed border-border rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-gold transition-fluid duration-300">
                          <UploadCloud className="h-8 w-8 text-gold-light mb-2" />
                          <span className="text-sm text-gold-light font-sans">Add Photo</span>
                          <input type="file" accept="image/*" multiple onChange={handleImageUpload} className="hidden" />
                        </label>
                      )}
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                        Add Video (Optional)
                      </label>
                      <div className="border-2 border-dashed border-border rounded-md p-8 text-center">
                        <Video className="h-12 w-12 text-gold-light mx-auto mb-4" />
                        <p className="text-text-muted mb-2 font-sans">Upload a short video showcasing your item</p>
                        <Button type="button" variant="outline" size="sm" onClick={handleVideoUpload}>
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Video
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Input
                      label="Listing Title"
                      placeholder="e.g., Embroidered Moroccan Kaftan Dress"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />

                    <div>
                      <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value, subcategory: '' })}
                        className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                        required
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>

                    {formData.category && (
                      <div>
                        <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                          Subcategory
                        </label>
                        <select
                          value={formData.subcategory}
                          onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                          className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                        >
                          <option value="">Select subcategory</option>
                          {subcategories[formData.category]?.map(sub => (
                            <option key={sub} value={sub}>{sub}</option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-text-dark font-sans mb-3 label">
                        Condition
                      </label>
                      <div className="flex gap-4">
                        {(['NEW', 'LIKE_NEW', 'USED'] as const).map(condition => (
                          <button
                            key={condition}
                            type="button"
                            onClick={() => setFormData({ ...formData, condition })}
                            className={`flex-1 p-4 border rounded-md text-center transition-fluid duration-300 ${formData.condition === condition ? 'border-gold bg-gold/10' : 'border-border hover:border-gold/50'}`}
                          >
                            <div className="font-serif text-lg text-text-dark mb-1">
                              {condition === 'NEW' ? 'New' : condition === 'LIKE_NEW' ? 'Like New' : 'Used'}
                            </div>
                            <p className="text-sm text-text-muted font-sans">
                              {condition === 'NEW' ? 'Brand new with tags' :
                              condition === 'LIKE_NEW' ? 'Gently used, like new' :
                              'Pre-owned, shows wear'}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {mode === 'advanced' && (
                  <Card className="p-6 mb-6">
                    <h2 className="font-serif text-xl text-text-dark mb-6 tracking-heading leading-heading">Advanced Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="Fabric" placeholder="e.g., Silk, Cotton, Crepe" value={formData.fabric} onChange={(e) => setFormData({ ...formData, fabric: e.target.value })} icon={<Scissors className="h-5 w-5" />} />
                      <Input label="Color" placeholder="e.g., Emerald Green, Navy Blue" value={formData.color} onChange={(e) => setFormData({ ...formData, color: e.target.value })} icon={<Palette className="h-5 w-5" />} />
                      <Input label="Occasion" placeholder="e.g., Wedding, Eid, Casual" value={formData.occasion} onChange={(e) => setFormData({ ...formData, occasion: e.target.value })} icon={<Calendar className="h-5 w-5" />} />
                      <Input label="Brand" placeholder="e.g., Zara, Local Designer" value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} icon={<Award className="h-5 w-5" />} />
                    </div>

                    <div className="mt-6">
                      <label className="block text-sm font-medium text-text-dark font-sans mb-3 label">
                        Available Sizes
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {sizeOptions.map(size => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => handleSizeToggle(size)}
                            className={`px-4 py-2 rounded-md font-sans transition-fluid duration-300 ${formData.sizes.includes(size) ? 'bg-gold text-bg' : 'bg-bg-light text-text-dark border border-border hover:border-gold'}`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}
              </div>

              <div>
                <Card className="p-6 mb-6 sticky top-8">
                  <h2 className="font-serif text-xl text-text-dark mb-6 tracking-heading leading-heading">Pricing & Details</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark font-sans mb-2 flex items-center gap-2 label">
                        <DollarSign className="h-4 w-4" />
                        Price
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-text-muted">$</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          className="w-full pl-8 pr-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-dark font-sans mb-2 flex items-center gap-2 label">
                        <Package className="h-4 w-4" />
                        Shipping Cost
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-text-muted">$</span>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={formData.shippingCost}
                          onChange={(e) => setFormData({ ...formData, shippingCost: e.target.value })}
                          className="w-full pl-8 pr-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                        Quantity Available
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                        required
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-text-dark font-sans label">
                          Description
                        </label>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={generateDescription}
                          className="flex items-center gap-2"
                        >
                          <Sparkles className="h-4 w-4" />
                          AI Generate
                        </Button>
                      </div>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={6}
                        className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                        placeholder="Describe your item in detail..."
                        required
                      />
                    </div>

                    {mode === 'advanced' && (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                            Dispatch Time (Days)
                          </label>
                          <select
                            value={formData.dispatchTime}
                            onChange={(e) => setFormData({ ...formData, dispatchTime: e.target.value })}
                            className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                          >
                            <option value="1-2">1-2 business days</option>
                            <option value="3-5">3-5 business days</option>
                            <option value="5-7">5-7 business days</option>
                            <option value="7+">7+ business days</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text-dark font-sans mb-2 label">
                            Return Policy (Days)
                          </label>
                          <select
                            value={formData.returnPolicy}
                            onChange={(e) => setFormData({ ...formData, returnPolicy: e.target.value })}
                            className="w-full px-3 py-2.5 bg-bg-light border border-border rounded-md text-text-dark focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent font-sans"
                          >
                            <option value="14">14 days</option>
                            <option value="30">30 days</option>
                            <option value="60">60 days</option>
                            <option value="none">No returns</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="pt-6 border-t border-border">
                      <div className="mb-6">
                        <h3 className="font-serif text-lg text-text-dark mb-3">Preview</h3>
                        <div className="bg-bg-mid rounded-md p-4">
                          <p className="text-white font-sans mb-2">
                            <span className="text-gold-light">Price:</span> ${parseFloat(formData.price || '0').toFixed(2)}
                          </p>
                          <p className="text-white font-sans mb-2">
                            <span className="text-gold-light">Shipping:</span> ${parseFloat(formData.shippingCost || '0').toFixed(2)}
                          </p>
                          <p className="text-white font-sans">
                            <span className="text-gold-light">Total:</span> ${(parseFloat(formData.price || '0') + parseFloat(formData.shippingCost || '0')).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Button type="submit" variant="primary" fullWidth>
                          Submit for Approval
                        </Button>
                        <Button type="button" variant="outline" fullWidth onClick={handleSaveDraft}>
                          Save as Draft
                        </Button>
                        {mode === 'advanced' && (
                          <Button type="button" variant="ghost" fullWidth onClick={handleDuplicate}>
                            Duplicate Listing
                          </Button>
                        )}
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-sm text-text-muted font-sans">
                          All listings require admin approval before going live.
                        </p>
                      </div>
                    </div>
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
