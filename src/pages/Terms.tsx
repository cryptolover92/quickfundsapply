
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using LoanWeb's services, you agree to be bound by these Terms & Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Loan Application Process</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and truthful information</li>
              <li>We reserve the right to verify the information provided</li>
              <li>Submission of application doesn't guarantee approval</li>
              <li>Interest rates and terms are subject to change</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility Criteria</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum age: 21 years</li>
              <li>Must be an Indian resident</li>
              <li>Minimum income requirements apply</li>
              <li>Credit score criteria must be met</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Repayment Terms</h2>
            <p>Details about EMI calculation, prepayment charges, and late payment penalties.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
