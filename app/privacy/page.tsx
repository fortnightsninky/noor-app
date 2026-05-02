import AnnouncementBar from '@/components/layout/AnnouncementBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Card from '@/components/ui/Card'

export default function PrivacyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-[100dvh] bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-white mb-2 tracking-heading leading-heading">Privacy Policy</h1>
          <p className="text-gold-light font-sans mb-12">Last updated: May 1, 2026</p>

          <Card className="p-8">
            <div className="space-y-8 text-text-muted font-sans leading-relaxed">
              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">1. Information We Collect</h2>
                <p className="mb-2">We collect information you provide directly:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Account information (name, email, phone number)</li>
                  <li>Shipping addresses</li>
                  <li>Payment information (processed by Stripe, not stored by Noor)</li>
                  <li>Listing details and transaction history</li>
                  <li>Communications with other users</li>
                </ul>
                <p className="mt-2">We also collect usage data automatically, including browsing patterns, device information, and cookies.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>To facilitate transactions between buyers and sellers</li>
                  <li>To process payments and payouts</li>
                  <li>To communicate about your orders and account</li>
                  <li>To improve the Platform and user experience</li>
                  <li>To send promotional communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">3. Information Sharing</h2>
                <p>We do not sell your personal information. We share information only with:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Sellers, to fulfill your orders (name, shipping address)</li>
                  <li>Stripe, to process payments securely</li>
                  <li>Service providers who help operate the Platform</li>
                  <li>Law enforcement, when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your information. Payment data is handled entirely by Stripe, which is PCI DSS compliant. We use encryption for data in transit and at rest.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">5. Cookies</h2>
                <p>We use cookies to maintain your session, remember your preferences, and analyze usage patterns. You may disable cookies in your browser settings, though some features may not function properly.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt out of promotional communications</li>
                  <li>Export your personal data</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">7. Data Retention</h2>
                <p>We retain your account information for as long as your account is active. Transaction records are retained for 7 years for tax and legal compliance. You may request account deletion at any time from your account settings.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">8. Children&apos;s Privacy</h2>
                <p>Noor is not intended for use by individuals under 18. We do not knowingly collect personal information from children.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">9. Changes to This Policy</h2>
                <p>We may update this Privacy Policy periodically. We will notify you of significant changes via email or Platform notification.</p>
              </section>

              <section>
                <h2 className="font-serif text-xl text-text-dark mb-3">10. Contact</h2>
                <p>For privacy inquiries, contact us at privacy@noor.com.</p>
              </section>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  )
}
