
import { Progress } from "@/components/ui/progress";

interface LoanProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const LoanProgressBar = ({ currentStep, totalSteps }: LoanProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <Progress value={progress} className="h-2" />
      <div className="text-sm text-muted-foreground text-center">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default LoanProgressBar;
