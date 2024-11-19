import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import TimeValueAnimations from "@/components/visualizations/time-value-animations";

const PresentValueMisconceptions = () => {
  return (
    <SectionLayout
      title="Present Value Calculation Errors"
      description="Understanding and avoiding mistakes in present value calculations"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Discount Rate Application</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A critical error in present value calculations is the improper selection or 
                application of discount rates. The chosen rate should reflect both the time 
                value of money and the risk associated with future payments.
              </p>
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
              <h2 className="text-2xl font-semibold mb-4">Exponential vs. Linear Discounting</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A common misconception is applying linear discounting instead of exponential 
                discounting. Present value decreases exponentially with time, not linearly.
              </p>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-4">
                Correct (Exponential): PV = FV / (1 + r)^n
                <br />
                Incorrect (Linear): PV = FV * (1 - r*n)
              </div>
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
              <h2 className="text-2xl font-semibold mb-4">Impact on Compensation</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Using incorrect discount rates can significantly under or overvalue damages</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Failure to account for inflation in long-term compensation calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Inconsistent treatment of tax effects in present value calculations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default PresentValueMisconceptions;
