
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface MobileVerificationProps {
  onNext: (mobileNumber: string) => void;
  onBack?: () => void;
}

const DEMO_OTP = "123456";

export const MobileVerification = ({ onNext, onBack }: MobileVerificationProps) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const { toast } = useToast();

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
      const { error: progressError } = await supabase
        .from('loan_applications_progress')
        .insert([
          { 
            current_step: 2,
            personal_info: {
              mobile_number: mobileNumber
            }
          }
        ]);

      if (progressError) {
        console.error('Error creating loan application:', progressError);
        toast({
          title: "Error",
          description: "Failed to start loan application. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "OTP Verified!",
        description: "Proceeding to next step...",
      });
      onNext(mobileNumber);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Demo mode: Please use 123456 as OTP",
        variant: "destructive",
      });
    }
  };

  return (
    !showOTP ? (
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
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
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
    )
  );
};
