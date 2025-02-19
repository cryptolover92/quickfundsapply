
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
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
  );
};
