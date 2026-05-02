import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Terms() {
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
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Conditions</span>
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
              <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Nexus Digital Agency ("Nexus", "we", "us", "our") website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Services</h2>
              <p>
                Nexus provides digital marketing, brand management, web development, UI/UX design, content creation, and related consulting services. The specific scope, deliverables, timeline, and fees for any engagement will be defined in a separate Statement of Work (SOW) or Service Agreement executed between you and Nexus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">3. User Obligations</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must provide accurate and complete information when using our services or filling out forms on our website.</li>
                <li>You are responsible for maintaining the confidentiality of any account credentials.</li>
                <li>You agree not to use our website for any unlawful, harmful, or abusive purpose.</li>
                <li>You will not attempt to interfere with the proper functioning of our website or services.</li>
                <li>You agree not to copy, reproduce, or distribute any content from our website without prior written consent.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="mb-4">
                All content on this website — including text, graphics, logos, images, software, and design — is the intellectual property of Nexus Digital Agency or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.
              </p>
              <p>
                Upon full payment for services rendered, clients receive a license to use the deliverables as specified in the applicable SOW. Nexus retains the right to showcase completed work in its portfolio and marketing materials unless a confidentiality agreement states otherwise.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment terms will be outlined in the individual Service Agreement or SOW.</li>
                <li>Unless otherwise agreed, an advance payment may be required before work commences.</li>
                <li>All invoices are due within 15 days of the invoice date unless otherwise stated.</li>
                <li>Late payments may incur interest at 1.5% per month on the outstanding balance.</li>
                <li>Nexus reserves the right to suspend services in the event of non-payment.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of engagement. This obligation survives the termination of any agreement for a period of two (2) years.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.</li>
                <li>Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.</li>
                <li>We do not guarantee specific results from our marketing or digital services, as outcomes depend on many external factors beyond our control.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">8. Disclaimer of Warranties</h2>
              <p>
                Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, whether express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">9. Termination</h2>
              <p>
                Either party may terminate an engagement by providing written notice as specified in the applicable Service Agreement. Upon termination, the client shall pay for all work completed up to the termination date. We reserve the right to terminate or suspend access to our website at any time without prior notice for violations of these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Nexus Digital Agency, its officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, and expenses arising out of your use of our website, violation of these terms, or infringement of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">11. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control, including but not limited to acts of God, natural disasters, pandemics, government restrictions, or internet outages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">12. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Your continued use of our website or services after such changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-white mb-4">14. Contact Information</h2>
              <p>
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white font-medium">Nexus Digital Agency</p>
                <p>Email: legal@nexus.agency</p>
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
