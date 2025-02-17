
import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information Accuracy</h2>
            <p>While we strive to provide accurate information, we make no warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information on our website is strictly at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Financial Decisions</h2>
            <p>The information provided on this website is for general informational purposes only. It should not be considered as financial advice. We recommend consulting with a qualified financial advisor before making any financial decisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We have no control over the content, privacy policies, or practices of these websites and accept no responsibility for them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Changes to Services</h2>
            <p>We reserve the right to modify or discontinue any aspect of our services without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
