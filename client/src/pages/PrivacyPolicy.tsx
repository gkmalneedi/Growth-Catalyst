import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-48 md:pb-20 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,53,132,0.15),transparent_50%)] -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
          >
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-2xl"
          >
            Last updated: March 16, 2026
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-12 text-muted-foreground leading-relaxed">

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to Nexus Digital Agency ("Nexus", "we", "us", or "our"). We are committed to protecting the privacy of our users and clients. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-white font-medium">Personal Information:</span> Name, email address, phone number, company name, and job title when you fill out forms, subscribe to our newsletter, or contact us.</li>
                <li><span className="text-white font-medium">Usage Data:</span> Information about how you interact with our website, including IP address, browser type, pages visited, time spent, and referring URLs.</li>
                <li><span className="text-white font-medium">Cookies & Tracking:</span> We use cookies, web beacons, and similar technologies to enhance your browsing experience and analyze website traffic.</li>
                <li><span className="text-white font-medium">Communication Data:</span> Records of correspondence when you contact us via email, forms, or other channels.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze usage patterns and optimize our website performance</li>
                <li>To personalize your experience and deliver relevant content</li>
                <li>To protect against fraud, unauthorized access, and other security threats</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Information Sharing & Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-white font-medium">Service Providers:</span> Trusted third parties who assist us in operating our website and delivering our services (e.g., hosting, analytics, email platforms).</li>
                <li><span className="text-white font-medium">Legal Requirements:</span> When required by law or to respond to legal processes.</li>
                <li><span className="text-white font-medium">Business Transfers:</span> In connection with a merger, acquisition, or sale of assets.</li>
                <li><span className="text-white font-medium">With Your Consent:</span> When you have given us explicit permission to share your information.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, firewalls, and secure server infrastructure to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Cookies Policy</h2>
              <p className="mb-4">
                Our website uses cookies to enhance functionality and analyze performance. You can control cookie preferences through your browser settings. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="text-white font-medium">Essential Cookies:</span> Required for basic website functionality.</li>
                <li><span className="text-white font-medium">Analytics Cookies:</span> Help us understand how visitors interact with our site.</li>
                <li><span className="text-white font-medium">Marketing Cookies:</span> Used to deliver relevant advertisements and track campaign performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">7. Your Rights</h2>
              <p className="mb-4">Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate information</li>
                <li>Right to request deletion of your data</li>
                <li>Right to restrict or object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <span className="text-white">privacy@nexus.agency</span>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white font-medium">Nexus Digital Agency</p>
                <p>Email: privacy@nexus.agency</p>
                <p>Address: 123 Innovation Blvd, Tech City</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
