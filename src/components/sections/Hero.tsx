
import { motion } from "framer-motion";
import LoanProgressBar from "@/components/LoanProgressBar";
import { MobileVerification } from "@/components/loan-application/MobileVerification";
import { PersonalInfo } from "@/components/loan-application/PersonalInfo";
import { LoanDetails } from "@/components/loan-application/LoanDetails";
import { SuccessMessage } from "@/components/loan-application/SuccessMessage";

interface HeroProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  mobileNumber: string;
  setMobileNumber: (number: string) => void;
}

export const Hero = ({
  currentStep,
  setCurrentStep,
  mobileNumber,
  setMobileNumber,
}: HeroProps) => {
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
  );
};
