
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
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowApplicationForm={setShowApplicationForm}
      />
      
      <Hero
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
      />

      {!showApplicationForm && (
        <>
          <AboutUs />
          <HowItWorks />
          <LoanServices />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
