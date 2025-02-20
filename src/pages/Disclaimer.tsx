
import React from 'react';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/layout/Navigation';

const Disclaimer = () => {
  return (
    <>
      <Navigation isMenuOpen={false} setIsMenuOpen={() => {}} setShowApplicationForm={() => {}} />
      <div className="min-h-screen bg-gray-50 pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          
          <div className="space-y-6 text-gray-600">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information Accuracy</h2>
              <p>While we strive to provide accurate information, we make no warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information on our website is strictly at your own risk. LoanWeb will not be liable for any losses and/or damages in connection with the use of our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Financial Decisions</h2>
              <p>The information provided on this website is for general informational purposes only. It should not be considered as financial advice. We strongly recommend consulting with a qualified financial advisor before making any financial decisions. Your financial circumstances are unique, and what works for others may not work for you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services that are not owned or controlled by LoanWeb. We have no control over, and assume no responsibility for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>The content, privacy policies, or practices of any third-party websites or services</li>
                <li>Any damage or loss caused by accessing third-party content</li>
                <li>The availability or accuracy of third-party services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Changes to Services</h2>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Modify or discontinue any aspect of our services without notice</li>
                <li>Update interest rates and loan terms based on market conditions</li>
                <li>Change eligibility criteria for loan applications</li>
                <li>Modify or withdraw promotional offers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Legal Compliance</h2>
              <p>This website is designed to comply with Indian laws and regulations. Users from other jurisdictions should verify their local laws before using our services. We are not responsible for any non-compliance with local regulations outside India.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
