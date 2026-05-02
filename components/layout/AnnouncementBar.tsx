export default function AnnouncementBar() {
  return (
    <div className="bg-gold text-bg py-2 px-4" role="marquee" aria-label="Announcements">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-8 label">Free shipping on orders over $75</span>
            <span className="mx-8 opacity-40" aria-hidden="true">/</span>
            <span className="mx-8 label">Buyer protection on every order</span>
            <span className="mx-8 opacity-40" aria-hidden="true">/</span>
            <span className="mx-8 label">5,000+ trusted sellers across the US</span>
            <span className="mx-8 opacity-40" aria-hidden="true">/</span>
            <span className="mx-8 label">Free shipping on orders over $75</span>
            <span className="mx-8 opacity-40" aria-hidden="true">/</span>
            <span className="mx-8 label">Buyer protection on every order</span>
            <span className="mx-8 opacity-40" aria-hidden="true">/</span>
            <span className="mx-8 label">5,000+ trusted sellers across the US</span>
          </div>
        </div>
      </div>
    </div>
  )
}
