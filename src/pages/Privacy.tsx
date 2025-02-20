
import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/layout/Navigation';

const Privacy = () => {
  return (
    <>
      <Navigation isMenuOpen={false} setIsMenuOpen={() => {}} setShowApplicationForm={() => {}} />
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Financial information (income, employment details)</li>
                <li>Identification documents (as required for KYC)</li>
                <li>Loan application details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Processing your loan application</li>
                <li>Communicating with you about our services</li>
                <li>Complying with legal obligations</li>
                <li>Improving our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Restricted access to personal information</li>
                <li>Employee training on privacy practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Credit bureaus for credit assessment</li>
                <li>Banking partners for loan processing</li>
                <li>Legal authorities when required by law</li>
                <li>Service providers who assist in our operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
              <p>If you have any questions about our Privacy Policy, please contact us at:</p>
              <p className="mt-2">Email: privacy@loanweb.com</p>
              <p>Phone: +91 1800-123-4567</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
