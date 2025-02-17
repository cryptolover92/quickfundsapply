
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
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
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact Us</h2>
            <p>If you have any questions about our Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@loanweb.com</p>
            <p>Phone: +91 1800-123-4567</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
