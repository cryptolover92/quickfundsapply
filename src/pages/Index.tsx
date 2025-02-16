import { motion } from "framer-motion";
import { useState } from "react";
import { IndianRupee, Menu, X, Star, ChevronDown, ChevronUp, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const { toast } = useToast();

  const DEMO_OTP = "123456";

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setShowOTP(true);
    toast({
      title: "Demo Mode: OTP Sent!",
      description: `Use OTP: ${DEMO_OTP} for testing`,
    });
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    if (otp === DEMO_OTP) {
      toast({
        title: "OTP Verified!",
        description: "Proceeding to next step...",
      });
      setCurrentStep(2);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Demo mode: Please use 123456 as OTP",
        variant: "destructive",
      });
    }
  };

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
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
                Get Personal Loan of up to ₹10 Lakhs
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-green-500" />
                  <span><strong>Paperless</strong> process</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-green-500" />
                  <span><strong>15 minute</strong> disbursal</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="text-green-500" />
                  <span><strong>No collateral</strong> required</span>
                </div>
              </div>

              {!showOTP ? (
                <form onSubmit={handleSendOTP} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enter your mobile number
                    </label>
                    <div className="relative">
                      <Input
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="e.g. 9999999999"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className="w-full p-3"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">No spam calls, we promise!</p>
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full px-8 py-6 rounded-full font-medium text-lg"
                  >
                    Proceed Next
                    <span className="block text-sm font-normal">Get OTP on your mobile</span>
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOTP} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Enter OTP sent to +91 {mobileNumber}
                    </label>
                    <InputOTP
                      maxLength={6}
                      value={otp}
                      onChange={setOTP}
                    >
                      <InputOTPGroup className="gap-2">
                        <InputOTPSlot />
                        <InputOTPSlot />
                        <InputOTPSlot />
                        <InputOTPSlot />
                        <InputOTPSlot />
                        <InputOTPSlot />
                      </InputOTPGroup>
                    </InputOTP>
                    <div className="mt-2 flex justify-between items-center">
                      <p className="text-sm text-gray-500">Didn't receive OTP?</p>
                      <Button
                        type="button"
                        variant="link"
                        onClick={handleSendOTP}
                        className="text-sm"
                      >
                        Resend OTP
                      </Button>
                    </div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full px-8 py-6 rounded-full font-medium text-lg"
                  >
                    Verify OTP
                    <span className="block text-sm font-normal">and continue to application</span>
                  </Button>
                </form>
              )}
            </motion.div>
          </div>

          <div className="hidden md:block relative">
            <div className="absolute -top-20 right-0">
              <div className="glass-card p-4 rounded-xl mb-4 max-w-xs">
                <h3 className="text-lg font-medium mb-2">Trusted by</h3>
                <p className="text-3xl font-bold text-primary">4,00,000+</p>
                <p className="text-gray-600">Borrowers</p>
              </div>
              <div className="glass-card p-4 rounded-xl mb-4 max-w-xs">
                <h3 className="text-lg font-medium mb-2">Loans Disbursed</h3>
                <p className="text-3xl font-bold text-primary">₹18,000 Cr.</p>
              </div>
              <div className="glass-card p-4 rounded-xl max-w-xs">
                <h3 className="text-lg font-medium mb-2">RBI registered NBFC</h3>
              </div>
            </div>
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
