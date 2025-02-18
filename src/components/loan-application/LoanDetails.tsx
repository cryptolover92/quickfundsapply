
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface LoanDetailsProps {
  onNext: () => void;
  onBack: () => void;
}

export const LoanDetails = ({ onNext, onBack }: LoanDetailsProps) => {
  const { toast } = useToast();
  const [loanDetails, setLoanDetails] = useState({
    loanType: "",
    loanAmount: "",
    employmentType: "",
    annualIncome: "",
    loanPurpose: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loanDetails.loanType || !loanDetails.loanAmount || !loanDetails.employmentType || !loanDetails.annualIncome) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

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
      .insert([{ 
        current_step: 4,
        loan_details: loanDetails
      }]);

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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Type
          </label>
          <Select
            value={loanDetails.loanType}
            onValueChange={(value) => setLoanDetails({ ...loanDetails, loanType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select loan type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal Loan</SelectItem>
              <SelectItem value="business">Business Loan</SelectItem>
              <SelectItem value="home">Home Loan</SelectItem>
              <SelectItem value="car">Car Loan</SelectItem>
              <SelectItem value="other">Other Loan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Amount
          </label>
          <Select
            value={loanDetails.loanAmount}
            onValueChange={(value) => setLoanDetails({ ...loanDetails, loanAmount: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select loan amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50000">₹50,000</SelectItem>
              <SelectItem value="100000">₹50,000 - ₹1,00,000</SelectItem>
              <SelectItem value="200000">₹1,00,000 - ₹2,00,000</SelectItem>
              <SelectItem value="500000">₹2,00,000 - ₹5,00,000</SelectItem>
              <SelectItem value="1000000">₹5,00,000 - ₹10,00,000</SelectItem>
              <SelectItem value="1000001">Above ₹10,00,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>
          <Select
            value={loanDetails.employmentType}
            onValueChange={(value) => setLoanDetails({ ...loanDetails, employmentType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select employment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="salaried">Salaried</SelectItem>
              <SelectItem value="self-employed">Self-Employed</SelectItem>
              <SelectItem value="business-owner">Business Owner</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Income
          </label>
          <Input
            type="number"
            placeholder="Enter your annual income"
            value={loanDetails.annualIncome}
            onChange={(e) => setLoanDetails({ ...loanDetails, annualIncome: e.target.value })}
            className="w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Purpose of Loan
          </label>
          <Textarea
            placeholder="Briefly describe the purpose of your loan..."
            value={loanDetails.loanPurpose}
            onChange={(e) => setLoanDetails({ ...loanDetails, loanPurpose: e.target.value })}
            className="w-full"
          />
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
        <Button type="submit" className="flex-1">
          Submit Application
        </Button>
      </div>
    </form>
  );
};
