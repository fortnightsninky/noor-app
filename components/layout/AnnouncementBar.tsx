export default function AnnouncementBar() {
  return (
    <div className="bg-gold text-bg py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8">Free shipping on orders over $75</span>
            <span className="mx-8">•</span>
            <span className="mx-8">Buyer protection on every order</span>
            <span className="mx-8">•</span>
            <span className="mx-8">5,000+ trusted sellers across the US</span>
          </div>
        </div>
      </div>
    </div>
  )
}