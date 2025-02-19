
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    { step: 1, title: "Check Loan Eligibility" },
    { step: 2, title: "Apply Online in Minutes" },
    { step: 3, title: "Submit KYC & Documents" },
    { step: 4, title: "Instant Processing & Approval" },
    { step: 5, title: "Receive Funds in Your Account" }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center space-y-4">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                {item.step}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
