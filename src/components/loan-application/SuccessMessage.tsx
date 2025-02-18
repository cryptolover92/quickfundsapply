
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const SuccessMessage = () => {
  return (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-10 h-10 text-green-600" />
      </div>
      <h3 className="text-2xl font-semibold">Application Submitted Successfully!</h3>
      <p className="text-gray-600">
        Thank you for submitting your loan application. Our team will review your application
        and contact you within 24-48 hours.
      </p>
      <Button onClick={() => window.location.href = "/"}>
        Back to Home
      </Button>
    </div>
  );
};
