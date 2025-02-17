import { motion } from "framer-motion";
import { useState } from "react";
import { IndianRupee, Menu, X, Star, ChevronDown, ChevronUp, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import LoanProgressBar from "@/components/LoanProgressBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const { toast } = useToast();

  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    email: "",
    gender: "",
    maritalStatus: "",
    dateOfBirth: null as Date | null,
    state: "",
  });

  const [loanDetails, setLoanDetails] = useState({
    loanType: "",
    loanAmount: "",
    employmentType: "",
    annualIncome: "",
    loanPurpose: "",
  });

  const DEMO_OTP = "123456";
  const TOTAL_STEPS = 6;

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
      setCurrentStep(2);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Demo mode: Please use 123456 as OTP",
        variant: "destructive",
      });
    }
  };

  const handlePersonalInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!personalInfo.fullName || !personalInfo.email || !personalInfo.gender || 
        !personalInfo.maritalStatus || !personalInfo.dateOfBirth || !personalInfo.state) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const personalInfoForStorage = {
      ...personalInfo,
      dateOfBirth: personalInfo.dateOfBirth?.toISOString(),
      mobile_number: mobileNumber
    };

    const { error } = await supabase
      .from('loan_applications_progress')
      .update({ 
        current_step: 3,
        personal_info: personalInfoForStorage
      })
      .eq('current_step', 2)
      .single();

    if (error) {
      console.error('Error updating loan application:', error);
      toast({
        title: "Error",
        description: "Failed to save personal information. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setCurrentStep(3);
    toast({
      title: "Success!",
      description: "Personal information saved successfully",
    });
  };

  const handleLoanDetailsSubmit = async (e: React.FormEvent) => {
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
      .from('loan_applications_progress')
      .update({ 
        current_step: 4,
        loan_details: loanDetails
      })
      .eq('current_step', 3)
      .single();

    if (error) {
      console.error('Error updating loan application:', error);
      toast({
        title: "Error",
        description: "Failed to save loan details. Please try again.",
        variant: "destructive",
      });
      return;
    }

    setCurrentStep(4);
    toast({
      title: "Success!",
      description: "Loan details saved successfully",
    });
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
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
      case 2:
        return (
          <form onSubmit={handlePersonalInfoSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input
                  type="text"
                  value={personalInfo.fullName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <Input
                  type="tel"
                  value={mobileNumber}
                  disabled
                  className="bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <Select
                  value={personalInfo.gender}
                  onValueChange={(value) => setPersonalInfo({ ...personalInfo, gender: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status
                </label>
                <Select
                  value={personalInfo.maritalStatus}
                  onValueChange={(value) => setPersonalInfo({ ...personalInfo, maritalStatus: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !personalInfo.dateOfBirth && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {personalInfo.dateOfBirth ? (
                        format(personalInfo.dateOfBirth, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={personalInfo.dateOfBirth}
                      onSelect={(date) => setPersonalInfo({ ...personalInfo, dateOfBirth: date })}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1940-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <Select
                  value={personalInfo.state}
                  onValueChange={(value) => setPersonalInfo({ ...personalInfo, state: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "Andhra Pradesh",
                      "Arunachal Pradesh",
                      "Assam",
                      "Bihar",
                      "Chhattisgarh",
                      "Goa",
                      "Gujarat",
                      "Haryana",
                      "Himachal Pradesh",
                      "Jharkhand",
                      "Karnataka",
                      "Kerala",
                      "Madhya Pradesh",
                      "Maharashtra",
                      "Manipur",
                      "Meghalaya",
                      "Mizoram",
                      "Nagaland",
                      "Odisha",
                      "Punjab",
                      "Rajasthan",
                      "Sikkim",
                      "Tamil Nadu",
                      "Telangana",
                      "Tripura",
                      "Uttar Pradesh",
                      "Uttarakhand",
                      "West Bengal",
                    ].map((state) => (
                      <SelectItem key={state} value={state.toLowerCase()}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="flex-1"
              >
                ← Back
              </Button>
              <Button type="submit" className="flex-1">
                Next →
              </Button>
            </div>
          </form>
        );
      case 3:
        return (
          <form onSubmit={handleLoanDetailsSubmit} className="space-y-6">
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
                onClick={() => setCurrentStep(2)}
                className="flex-1"
              >
                ← Back
              </Button>
              <Button type="submit" className="flex-1">
                Next →
              </Button>
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-bold text-primary">LoanWeb</a>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-primary">Homepage</a>
              <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
              <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
              <button className="button-gradient text-white px-6 py-2 rounded-full">
                Apply Now
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-gray-600 hover:text-primary">Homepage</a>
                <a href="#about" className="text-gray-600 hover:text-primary">About Us</a>
                <a href="#contact" className="text-gray-600 hover:text-primary">Contact Us</a>
                <button className="button-gradient text-white px-6 py-2 rounded-full">
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="glass-card p-4 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">Quick Processing</h3>
                  <p className="text-3xl font-bold text-primary">24 hrs</p>
                  <p className="text-gray-600">Approval Time</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">Interest Rate</h3>
                  <p className="text-3xl font-bold text-primary">10.5%</p>
                  <p className="text-gray-600">Starting from</p>
                </div>
              </motion.div>
            </div>

            <div className="w-full max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-morphism rounded-2xl p-8 w-full md:w-[40vw] max-w-2xl mx-auto"
              >
                {currentStep > 1 && (
                  <div className="mb-8">
                    <LoanProgressBar currentStep={currentStep} totalSteps={4} />
                  </div>
                )}

                {renderFormStep()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-xl hover-lift"
            >
              <h3 className="font-semibold text-xl mb-4">Quick Processing</h3>
              <p className="text-gray-600">Get your loan approved within 24 hours with minimal documentation.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl hover-lift"
            >
              <h3 className="font-semibold text-xl mb-4">Low Interest Rates</h3>
              <p className="text-gray-600">Competitive interest rates starting from 10.5% per annum.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-xl hover-lift"
            >
              <h3 className="font-semibold text-xl mb-4">Flexible Repayment</h3>
              <p className="text-gray-600">Choose from flexible repayment options that suit your needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Loan Eligibility Criteria</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Who Can Apply?</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Age: 21-58 years</li>
                <li>✓ Income: ₹25,000+ monthly</li>
                <li>✓ Employment: Salaried/Self-employed</li>
                <li>✓ Credit Score: 700+</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Required Documents</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Aadhar Card</li>
                <li>✓ PAN Card</li>
                <li>✓ 3 Months Salary Slips</li>
                <li>✓ 6 Months Bank Statements</li>
              </ul>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Loan Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Amount: Up to ₹10 Lakhs</li>
                <li>✓ Tenure: 12-60 months</li>
                <li>✓ Interest: 10.5% - 18% p.a.</li>
                <li>✓ Processing Fee: 1-2%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Our Story</h3>
              <p className="text-gray-600">
                With 10+ years of experience in financial services, we're a trusted name
                in personal lending. RBI registered and serving over 1 million satisfied
                customers, we're committed to making loans accessible to everyone.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-xl mb-4">Mission & Vision</h3>
              <p className="text-gray-600">
                Our mission is to revolutionize personal lending through technology,
                making it faster, easier, and more accessible for everyone. We envision
                a future where getting a loan is as simple as a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="glass-card">
              <AccordionTrigger className="px-6">What documents are needed?</AccordionTrigger>
              <AccordionContent className="px-6">
                You'll need to provide your Aadhar card, PAN card, latest salary slips,
                and bank statements for the last 6 months. All documents can be uploaded
                digitally through our platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="glass-card">
              <AccordionTrigger className="px-6">How much time does loan approval take?</AccordionTrigger>
              <AccordionContent className="px-6">
                Our advanced processing system typically provides loan approval within 24 hours
                of complete document submission. Disbursement happens within 48 hours of approval.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="glass-card">
              <AccordionTrigger className="px-6">Is my data safe?</AccordionTrigger>
              <AccordionContent className="px-6">
                Yes, absolutely! We use bank-grade encryption to protect your data. Your
                information is stored securely and never shared without your consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="glass-card">
              <AccordionTrigger className="px-6">What are the interest rates?</AccordionTrigger>
              <AccordionContent className="px-6">
                Our interest rates start from 10.5% p.a. and vary based on your profile,
                credit score, and loan amount. We ensure transparent pricing with no hidden charges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Business Owner",
                comment: "Quick process, minimal documentation. Got my loan in just 2 days!",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "IT Professional",
                comment: "Excellent customer service and very competitive interest rates.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Teacher",
                comment: "Smooth online process. Very happy with the service!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
