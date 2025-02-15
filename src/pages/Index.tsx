import { motion } from "framer-motion";
import { useState } from "react";
import { IndianRupee, Menu, X, Star, ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-bold text-primary">LoanWeb</a>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-primary">Homepage</a>
              <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
              <button className="button-gradient text-white px-6 py-2 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-600 hover:text-primary">Homepage</a>
                <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
                <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
                <button className="button-gradient text-white px-6 py-2 rounded-full">
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
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
            
            <div className="max-w-md mx-auto glass-morphism p-6 rounded-xl mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How much do you need?
              </label>
              <div className="flex items-center gap-2 mb-4">
                <IndianRupee className="text-primary" />
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

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Loan Eligibility Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Who Can Apply?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Age: 21-58 years</li>
                <li>✓ Income: ₹25,000+ monthly</li>
                <li>✓ Employment: Salaried/Self-employed</li>
                <li>✓ Credit Score: 700+</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Required Documents</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Aadhar Card</li>
                <li>✓ PAN Card</li>
                <li>✓ 3 Months Salary Slips</li>
                <li>✓ 6 Months Bank Statements</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Loan Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Amount: Up to ₹10 Lakhs</li>
                <li>✓ Tenure: 12-60 months</li>
                <li>✓ Interest: 10.5% - 18% p.a.</li>
                <li>✓ Processing Fee: 1-2%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Our Story</h3>
              <p className="text-gray-600">
                With 10+ years of experience in financial services, we're a trusted name
                in personal lending. RBI registered and serving over 1 million satisfied
                customers, we're committed to making loans accessible to everyone.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Mission & Vision</h3>
              <p className="text-gray-600">
                Our mission is to revolutionize personal lending through technology,
                making it faster, easier, and more accessible for everyone. We envision
                a future where getting a loan is as simple as a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card">
              <AccordionTrigger className="px-6">What documents are needed?</AccordionTrigger>
              <AccordionContent className="px-6">
                You'll need to provide your Aadhar card, PAN card, latest salary slips,
                and bank statements for the last 6 months. All documents can be uploaded
                digitally through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="glass-card">
              <AccordionTrigger className="px-6">How much time does loan approval take?</AccordionTrigger>
              <AccordionContent className="px-6">
                Our advanced processing system typically provides loan approval within 24 hours
                of complete document submission. Disbursement happens within 48 hours of approval.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="glass-card">
              <AccordionTrigger className="px-6">Is my data safe?</AccordionTrigger>
              <AccordionContent className="px-6">
                Yes, absolutely! We use bank-grade encryption to protect your data. Your
                information is stored securely and never shared without your consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="glass-card">
              <AccordionTrigger className="px-6">What are the interest rates?</AccordionTrigger>
              <AccordionContent className="px-6">
                Our interest rates start from 10.5% p.a. and vary based on your profile,
                credit score, and loan amount. We ensure transparent pricing with no hidden charges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                comment: "Quick process, minimal documentation. Got my loan in just 2 days!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "IT Professional",
                comment: "Excellent customer service and very competitive interest rates.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Teacher",
                comment: "Smooth online process. Very happy with the service!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Loans</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-600">
                <li>support@loanweb.com</li>
                <li>1800-123-4567</li>
                <li>123 Finance Street, Mumbai</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest offers and news
              </p>
              <button className="button-gradient text-white px-6 py-2 rounded-full">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 LoanWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
