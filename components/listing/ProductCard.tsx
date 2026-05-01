'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

interface ProductCardProps {
  id: string
  title: string
  price: number
  shippingCost: number
  images: string[]
  condition: 'NEW' | 'LIKE_NEW' | 'USED'
  sellerName: string
  category: string
  isWishlisted?: boolean
  onWishlistToggle?: () => void
  className?: string
}

export default function ProductCard({
  id,
  title,
  price,
  shippingCost,
  images,
  condition,
  sellerName,
  category,
  isWishlisted = false,
  onWishlistToggle,
  className = ''
}: ProductCardProps) {
  const conditionLabels = {
    NEW: 'New',
    LIKE_NEW: 'Like New',
    USED: 'Used'
  }

  const conditionColors = {
    NEW: 'success',
    LIKE_NEW: 'gold',
    USED: 'default'
  } as const

  return (
    <Card hover perpetual padding="none" className={`overflow-hidden ${className}`}>
      <Link href={`/listing/${id}`} className="block">
        {/* Image */}
        <div className="relative aspect-square bg-bg-mid">
          {images[0] && (
            <Image
              src={images[0]}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          )}
          {/* Wishlist button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              onWishlistToggle?.()
            }}
            className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-text-muted'}`}
            />
          </button>
          {/* Condition badge */}
          <div className="absolute top-3 left-3">
            <Badge variant={conditionColors[condition]} size="sm">
              {conditionLabels[condition]}
            </Badge>
          </div>
        </div>

        {/* Details */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-serif text-lg text-text-dark line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-sm text-text-muted font-sans">{category}</p>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xl font-serif text-text-dark">${price.toFixed(2)}</p>
              <p className="text-sm text-text-muted font-sans">
                +${shippingCost.toFixed(2)} shipping
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <p className="text-sm text-text-muted font-sans">
              By <span className="text-gold">{sellerName}</span>
            </p>
          </div>
        </div>
      </Link>
    </Card>
  )
}