import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function TermsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-white mb-2 tracking-heading leading-heading">Terms of Service</h1>
          <p className="text-gold-light font-sans mb-12">Last updated: May 1, 2026</p>

          <Card className="p-8">
            <div className="space-y-8 text-text-muted font-sans leading-relaxed">
              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">1. Acceptance of Terms</h2>
                <p>By accessing or using Noor (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">2. Eligibility</h2>
                <p>You must be at least 18 years old to create an account and use the Platform. By creating an account, you represent that you are at least 18 years of age.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">3. Account Responsibilities</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify Noor immediately of any unauthorized use of your account.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">4. Buying on Noor</h2>
                <p>When you purchase an item on Noor, you enter into a transaction directly with the seller. Noor facilitates the transaction but is not a party to the sale. All purchases are subject to the seller&apos;s return policy and our Buyer Protection program.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">5. Selling on Noor</h2>
                <p>Sellers may list items for sale on the Platform subject to our listing guidelines. Noor charges a 12% commission on completed sales, which may be reduced to 10% through our Loyalty Program at $10,000 lifetime GMV. Sellers are responsible for accurate item descriptions, timely shipping, and responding to buyer inquiries.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">6. Prohibited Items</h2>
                <p>Sellers may not list items that are counterfeit, stolen, illegal, or that violate intellectual property rights. Noor reserves the right to remove any listing that violates these guidelines without notice.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">7. Payments</h2>
                <p>All payments are processed through Stripe. Sellers receive payouts via Stripe Connect, typically within 3 business days after delivery confirmation. Buyers may pay via credit/debit card, Apple Pay, or Google Pay.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">8. Buyer Protection</h2>
                <p>If an item does not match its description or does not arrive, buyers may file a dispute within 14 days of the expected delivery date. Noor will mediate the dispute and may issue a refund at its discretion.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">9. Limitation of Liability</h2>
                <p>Noor provides the Platform &quot;as is&quot; and is not liable for any damages arising from transactions between buyers and sellers, interruptions to the service, or any loss of data.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">10. Changes to Terms</h2>
                <p>Noor may update these Terms of Service at any time. Continued use of the Platform after changes constitutes acceptance of the updated terms.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">11. Contact</h2>
                <p>For questions about these terms, please contact us at support@noor.com.</p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}
