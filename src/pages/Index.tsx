
import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LoanServices } from "@/components/sections/LoanServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [mobileNumber, setMobileNumber] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F1F0FB] to-[#E5DEFF]">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowApplicationForm={setShowApplicationForm}
      />
      
      <div className="pt-20 space-y-1">
        <Hero
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
        />

        {!showApplicationForm && (
          <div className="space-y-1">
            <div className="bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <AboutUs />
              </div>
            </div>
            
            <div className="bg-[#F8F7FF]">
              <div className="max-w-6xl mx-auto px-6">
                <HowItWorks />
              </div>
            </div>
            
            <div className="bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <LoanServices />
              </div>
            </div>
            
            <div className="bg-[#F8F7FF]">
              <div className="max-w-6xl mx-auto px-6">
                <WhyChooseUs />
              </div>
            </div>
            
            <div className="bg-white">
              <div className="max-w-6xl mx-auto px-6">
                <Testimonials />
              </div>
            </div>
            
            <div className="bg-[#F8F7FF]">
              <div className="max-w-6xl mx-auto px-6">
                <Contact />
              </div>
            </div>
            
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
