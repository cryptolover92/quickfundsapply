
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <div id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">A Trusted Online Loan Provider</h3>
            <p className="text-gray-600">With years of experience in the financial sector, we've helped thousands of customers achieve their financial goals through our hassle-free loan services.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Trust & Transparency</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Customer-Centric Approach</p>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-green-500" />
                <p>Secure & Reliable Processing</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-600">To make loans accessible and hassle-free for everyone, providing transparent and efficient financial solutions.</p>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-gray-600">To be the most customer-friendly online loan platform, setting new standards in digital lending.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
