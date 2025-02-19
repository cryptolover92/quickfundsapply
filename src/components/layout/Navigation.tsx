
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setShowApplicationForm: (show: boolean) => void;
}

export const Navigation = ({
  isMenuOpen,
  setIsMenuOpen,
  setShowApplicationForm,
}: NavigationProps) => {
  const handleApplyNow = () => {
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-primary">LoanWeb</a>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
            <div className="relative group">
              <a href="#services" className="text-gray-600 hover:text-primary flex items-center gap-1">
                Services <ArrowRight className="w-4 h-4" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 invisible group-hover:visible transition-all">
                <a href="#personal-loan" className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white">Personal Loan</a>
                <a href="#business-loan" className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white">Business Loan</a>
                <a href="#home-loan" className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white">Home Loan</a>
                <a href="#car-loan" className="block px-4 py-2 text-gray-600 hover:bg-primary hover:text-white">Car Loan</a>
              </div>
            </div>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
            <Button
              onClick={handleApplyNow}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Apply Now
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">Home</a>
              <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
              <div className="space-y-2">
                <p className="text-gray-600">Services</p>
                <div className="pl-4 space-y-2">
                  <a href="#personal-loan" className="block text-gray-600 hover:text-primary">Personal Loan</a>
                  <a href="#business-loan" className="block text-gray-600 hover:text-primary">Business Loan</a>
                  <a href="#home-loan" className="block text-gray-600 hover:text-primary">Home Loan</a>
                  <a href="#car-loan" className="block text-gray-600 hover:text-primary">Car Loan</a>
                </div>
              </div>
              <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
              <Button
                onClick={handleApplyNow}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
