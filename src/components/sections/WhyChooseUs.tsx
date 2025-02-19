
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const WhyChooseUs = () => {
  const features = [
    "Low Interest Rates",
    "Quick Loan Approval",
    "Minimal Documentation",
    "100% Online Process",
    "24/7 Customer Support",
    "Secure Processing"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <Check className="text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
