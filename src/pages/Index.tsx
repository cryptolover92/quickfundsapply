
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Star, Check, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import LoanProgressBar from "@/components/LoanProgressBar";
import { MobileVerification } from "@/components/loan-application/MobileVerification";
import { PersonalInfo } from "@/components/loan-application/PersonalInfo";
import { LoanDetails } from "@/components/loan-application/LoanDetails";
import { SuccessMessage } from "@/components/loan-application/SuccessMessage";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const testimonials = [
    {
      text: "Got my loan approved within 24 hours. Great service!",
      author: "Rajesh K.",
      rating: 5
    },
    {
      text: "Smooth process and transparent interest rates.",
      author: "Priya M.",
      rating: 5
    }
  ];

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

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <MobileVerification
            onNext={(mobile) => {
              setMobileNumber(mobile);
              setCurrentStep(2);
            }}
          />
        );
      case 2:
        return (
          <PersonalInfo
            onNext={() => setCurrentStep(3)}
            onBack={() => setCurrentStep(1)}
            mobileNumber={mobileNumber}
          />
        );
      case 3:
        return (
          <LoanDetails
            onNext={() => setCurrentStep(4)}
            onBack={() => setCurrentStep(2)}
          />
        );
      case 4:
        return <SuccessMessage />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      {/* Navigation */}
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

      {/* Hero Section with Form */}
      <section className="relative min-h-screen pt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                Quick & Easy Loan
                <span className="text-primary block">Application Process</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600"
              >
                Get your loan approved in just a few simple steps. 
                Low interest rates and flexible repayment options available.
              </motion.p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <LoanProgressBar currentStep={currentStep} totalSteps={4} />
              </div>
              {renderFormStep()}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {!showApplicationForm && (
        <>
          {/* Loan Types Section */}
          <div className="py-16">
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

          {/* Why Choose Us Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  "Low Interest Rates",
                  "Quick Loan Approval",
                  "Minimal Documentation",
                  "100% Online Process",
                  "24/7 Customer Support",
                  "Secure Processing"
                ].map((feature, index) => (
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

          {/* Testimonials Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Customer Testimonials</h2>
            <Carousel className="w-full max-w-xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                      <div className="flex justify-center gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                      <p className="font-semibold">- {testimonial.author}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Contact Section */}
          <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="text-primary" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">XYZ Tower, New Delhi, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="text-primary" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">support@loanprovider.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 border rounded-lg"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 border rounded-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full p-3 border rounded-lg"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full p-3 border rounded-lg"
                    />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
