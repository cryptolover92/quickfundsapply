
import { motion } from "framer-motion";

const loanTypes = [
  {
    title: "Personal Loan",
    description: "Quick financial support for personal needs.",
    amount: "₹50K - ₹10L",
    rate: "10%"
  },
  {
    title: "Business Loan",
    description: "Funding to grow your business.",
    amount: "₹1L - ₹50L",
    rate: "Flexible"
  },
  {
    title: "Home Loan",
    description: "Buy or renovate your dream home.",
    amount: "₹5L - ₹1Cr",
    rate: "8%"
  },
  {
    title: "Car Loan",
    description: "Get your dream car with easy financing.",
    amount: "₹1L - ₹25L",
    rate: "9%"
  }
];

export const LoanServices = () => {
  return (
    <div id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Loan Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{loan.title}</h3>
              <p className="text-gray-600 mb-4">{loan.description}</p>
              <div className="text-sm text-gray-500">
                <p>Amount: {loan.amount}</p>
                <p>Interest from: {loan.rate}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
