
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LoanWeb</h3>
            <p className="text-gray-400">Your trusted partner for quick and easy loans.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#personal-loan" className="text-gray-400 hover:text-white">Personal Loan</a></li>
              <li><a href="#business-loan" className="text-gray-400 hover:text-white">Business Loan</a></li>
              <li><a href="#home-loan" className="text-gray-400 hover:text-white">Home Loan</a></li>
              <li><a href="#car-loan" className="text-gray-400 hover:text-white">Car Loan</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-gray-400">support@loanprovider.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-gray-400">XYZ Tower, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LoanWeb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
