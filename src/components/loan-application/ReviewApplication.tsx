
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ReviewApplicationProps {
  onNext: () => void;
  onBack: () => void;
  personalInfo: any;
  loanDetails: any;
  mobileNumber: string;
}

export const ReviewApplication = ({ 
  onNext, 
  onBack, 
  personalInfo, 
  loanDetails,
  mobileNumber 
}: ReviewApplicationProps) => {
  const { toast } = useToast();

  const handleSubmit = async () => {
    const { error } = await supabase
      .from('loan_applications')
      .insert([
        {
          loan_amount: Number(loanDetails.loanAmount),
          loan_tenure: 12,
          monthly_income: Number(loanDetails.annualIncome) / 12,
          loan_purpose: loanDetails.loanPurpose,
          employment_type: loanDetails.employmentType,
        }
      ]);

    if (error) {
      console.error('Error submitting loan application:', error);
      toast({
        title: "Error",
        description: "Failed to submit loan application. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const { error: progressError } = await supabase
      .from('loan_applications_progress')
      .update({ 
        current_step: 5,
      })
      .eq('current_step', 4)
      .single();

    if (progressError) {
      console.error('Error updating progress:', progressError);
      return;
    }

    onNext();
    toast({
      title: "Success!",
      description: "Your loan application has been submitted successfully!",
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Review Your Application</h3>
        <p className="text-gray-600">Please review your information before final submission</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Personal Information</h4>
          <div className="grid gap-2">
            <p><span className="text-gray-600">Name:</span> {personalInfo.fullName}</p>
            <p><span className="text-gray-600">Email:</span> {personalInfo.email}</p>
            <p><span className="text-gray-600">Mobile:</span> {mobileNumber}</p>
            <p><span className="text-gray-600">Gender:</span> {personalInfo.gender}</p>
            <p><span className="text-gray-600">State:</span> {personalInfo.state}</p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">Loan Details</h4>
          <div className="grid gap-2">
            <p><span className="text-gray-600">Loan Type:</span> {loanDetails.loanType}</p>
            <p><span className="text-gray-600">Loan Amount:</span> ₹{loanDetails.loanAmount}</p>
            <p><span className="text-gray-600">Employment:</span> {loanDetails.employmentType}</p>
            <p><span className="text-gray-600">Annual Income:</span> ₹{loanDetails.annualIncome}</p>
            {loanDetails.loanPurpose && (
              <p><span className="text-gray-600">Purpose:</span> {loanDetails.loanPurpose}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1"
        >
          ← Back
        </Button>
        <Button 
          onClick={handleSubmit}
          className="flex-1"
        >
          Submit Application
        </Button>
      </div>
    </div>
  );
};
