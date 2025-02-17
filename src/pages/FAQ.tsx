
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-lg">
            <AccordionTrigger className="px-6 hover:no-underline">
              What documents are required for a loan application?
            </AccordionTrigger>
            <AccordionContent className="px-6">
              Required documents include: Valid ID proof (Aadhar/PAN), Income proof (salary slips/ITR),
              Address proof, Bank statements for the last 6 months, and Employment proof.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-lg">
            <AccordionTrigger className="px-6 hover:no-underline">
              How long does the loan approval process take?
            </AccordionTrigger>
            <AccordionContent className="px-6">
              Typically, loans are approved within 24-48 hours after submission of all required documents.
              However, this may vary based on the loan amount and type.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-lg">
            <AccordionTrigger className="px-6 hover:no-underline">
              What are the interest rates offered?
            </AccordionTrigger>
            <AccordionContent className="px-6">
              Interest rates start from 10.5% p.a. and vary based on factors like loan amount,
              tenure, credit score, and income. Contact our team for personalized rates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-lg">
            <AccordionTrigger className="px-6 hover:no-underline">
              Can I repay my loan before the tenure ends?
            </AccordionTrigger>
            <AccordionContent className="px-6">
              Yes, you can make prepayments or foreclose your loan. A nominal prepayment charge
              may apply as per the terms of your loan agreement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white rounded-lg">
            <AccordionTrigger className="px-6 hover:no-underline">
              What is the minimum credit score required?
            </AccordionTrigger>
            <AccordionContent className="px-6">
              We typically require a minimum credit score of 700. However, we may consider applications
              with lower scores based on other factors like income and employment stability.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
