
import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/layout/Navigation';

const Terms = () => {
  return (
    <>
      <Navigation isMenuOpen={false} setIsMenuOpen={() => {}} setShowApplicationForm={() => {}} />
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using LoanWeb's services, you agree to be bound by these Terms & Conditions. Please read them carefully before proceeding with any loan application.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Loan Application Process</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate and truthful information in your application</li>
                <li>We reserve the right to verify the information provided</li>
                <li>Submission of application doesn't guarantee approval</li>
                <li>Interest rates and terms are subject to change based on market conditions</li>
                <li>Processing fees may apply and are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility Criteria</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum age: 21 years</li>
                <li>Must be an Indian resident</li>
                <li>Minimum income requirements apply</li>
                <li>Credit score criteria must be met</li>
                <li>Valid identification and address proof required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Repayment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>EMI payment dates are fixed and must be adhered to</li>
                <li>Late payment penalties will be applicable</li>
                <li>Prepayment charges may apply as per loan type</li>
                <li>Default in payment may affect credit score</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Modification of Terms</h2>
              <p>LoanWeb reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Continued use of our services constitutes acceptance of modified terms.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
