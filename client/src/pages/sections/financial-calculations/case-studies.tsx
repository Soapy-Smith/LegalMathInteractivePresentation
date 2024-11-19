import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudies, type CaseStudy } from "@/components/case-studies/case-study";

const caseStudies: CaseStudy[] = [
  {
    title: "MetLife Pension Calculation Case (2022)",
    description: "Analysis of pension benefit miscalculations affecting thousands of retirees",
    details: `In December 2022, MetLife faced a class-action lawsuit for miscalculating pension benefits. 
    The error stemmed from using annual interest rates without proper monthly conversion and outdated mortality tables. 
    For a typical monthly benefit of $2,000 over 20 years, the difference between correct and incorrect calculations 
    was substantial: correct present value ≈ $311,555 vs. incorrect calculation ≈ $24,919.`,
    impact: "The case resulted in a $202.5 million settlement to affected pensioners and highlighted the importance of accurate financial calculations in pension benefits."
  },
  {
    title: "Wells Fargo Cross-Selling Scandal",
    description: "Analysis of unauthorized account openings and their financial impact",
    details: `Between 2002 and 2016, Wells Fargo employees opened millions of unauthorized accounts. 
    The financial impact included direct damages (fees, charges, overdrafts) and indirect damages 
    (credit score impacts leading to higher interest rates on loans). A typical mortgage impact could 
    result in over $30,000 in additional costs over a 30-year term due to credit score damage.`,
    impact: "Wells Fargo agreed to pay $3 billion to resolve civil and criminal investigations, leading to reformed sales practices and oversight."
  },
  {
    title: "Countrywide Financial Mortgage Errors",
    description: "Systematic errors in adjustable-rate mortgage calculations",
    details: `Countrywide Financial faced litigation for systematic errors in calculating adjustable-rate 
    mortgage payments. The error involved direct application of annual rates without monthly conversion, 
    affecting over 122,000 borrowers.`,
    impact: "Led to significant reforms in mortgage calculation practices and substantial compensation for affected borrowers."
  },
  {
    title: "JPMorgan Chase Overdraft Litigation",
    description: "Analysis of transaction reordering impact on overdraft fees",
    details: `JPMorgan Chase faced litigation for reordering transactions from highest to lowest amount 
    instead of chronologically, maximizing overdraft fees. The practice could turn a single overdraft 
    event into multiple fee-generating transactions.`,
    impact: "Resulted in significant changes to overdraft practices across the banking industry and substantial settlements."
  },
  {
    title: "Mortgage Prepayment Penalty Case",
    description: "Complex interest calculations in prepayment penalties",
    details: `The case involved disputes over prepayment penalty calculations in commercial mortgages. 
    The key issue was the proper method for calculating the present value of future interest payments 
    when loans were paid off early.`,
    impact: "Established precedents for standardized prepayment penalty calculations in commercial mortgages."
  }
];

const FinancialCaseStudies = () => {
  return (
    <SectionLayout
      title="Financial Case Studies"
      description="Analysis of significant cases involving financial calculations in law"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <CaseStudies studies={caseStudies} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Accurate financial calculations are crucial in legal settlements</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Small computational errors can lead to significant financial impacts</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Complex financial products require rigorous mathematical analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default FinancialCaseStudies;
