import { SectionLayout } from "@/components/layout/section-layout";
import CompoundInterestVisualizer from "@/components/visualizations/compound-interest-visual";
import TimeValueAnimations from "@/components/visualizations/time-value-animations";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const FinancialCalculations = () => {
  return (
    <SectionLayout
      title="Financial Calculations in Legal Settlements"
      description="Understanding time value of money and compound interest in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Time Value of Money</h2>
              <TimeValueAnimations />
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
              <h2 className="text-2xl font-semibold mb-4">Compound Interest Analysis</h2>
              <CompoundInterestVisualizer />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Financial Implications</h2>
              <p className="text-gray-600 leading-relaxed">
                Understanding financial calculations is crucial for legal professionals when dealing 
                with settlements, damages, and compensation. These visualizations demonstrate key 
                concepts in financial mathematics that impact legal decisions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default FinancialCalculations;
