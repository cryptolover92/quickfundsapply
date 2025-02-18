
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Star, ChevronDown, ChevronUp, Check } from "lucide-react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import LoanProgressBar from "@/components/LoanProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MobileVerification } from "@/components/loan-application/MobileVerification";
import { PersonalInfo } from "@/components/loan-application/PersonalInfo";
import { LoanDetails } from "@/components/loan-application/LoanDetails";
import { ReviewApplication } from "@/components/loan-application/ReviewApplication";
import { SuccessMessage } from "@/components/loan-application/SuccessMessage";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: null as Date | null,
    state: "",
  });
  const [loanDetails, setLoanDetails] = useState({
    loanType: "",
    loanAmount: "",
    employmentType: "",
    annualIncome: "",
    loanPurpose: "",
  });

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
        return (
          <ReviewApplication
            onNext={() => setCurrentStep(5)}
            onBack={() => setCurrentStep(3)}
            personalInfo={personalInfo}
            loanDetails={loanDetails}
            mobileNumber={mobileNumber}
          />
        );
      case 5:
        return <SuccessMessage />;
      default:
        return null;
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col space-y-4"
              >
                <Button className="w-full md:w-auto">
                  Start Application
                </Button>
              </motion.div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <LoanProgressBar currentStep={currentStep} totalSteps={5} />
              </div>
              {renderFormStep()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
