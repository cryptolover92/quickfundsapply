
import { motion } from "framer-motion";
import { useState } from "react";
import { Indian } from "lucide-react";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              Fast & Paperless Process
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
              Get a Personal Loan up to ₹10 Lakhs
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Quick approval • Minimal documentation • Competitive rates
            </p>
            
            {/* Loan Amount Selector */}
            <div className="max-w-md mx-auto glass-morphism p-6 rounded-xl mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How much do you need?
              </label>
              <div className="flex items-center gap-2 mb-4">
                <Indian className="text-primary" />
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  min="50000"
                  max="1000000"
                  step="10000"
                />
              </div>
              <input
                type="range"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                min="50000"
                max="1000000"
                step="10000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <button className="button-gradient text-white px-8 py-4 rounded-full font-medium text-lg hover-lift">
              Check Eligibility Now
            </button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="absolute bottom-12 left-0 right-0 px-4">
          <div className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Quick Process",
                description: "Get approved in 24 hours",
              },
              {
                title: "Zero Collateral",
                description: "No security deposit needed",
              },
              {
                title: "Lowest Rates",
                description: "Starting from 10.5% p.a",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl text-center hover-lift cursor-pointer"
              >
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
