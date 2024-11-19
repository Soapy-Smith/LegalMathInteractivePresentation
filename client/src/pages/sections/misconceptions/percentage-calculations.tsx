import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const PercentageCalculations = () => {
  return (
    <SectionLayout
      title="Percentage Calculations in Law"
      description="Understanding and avoiding percentage calculation errors in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Interest Rate Increases</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                One common misconception involves calculating percentage increases. For example, 
                when an interest rate increases from 5% to 7%, it's incorrect to say this is a 
                2% increase. It's actually a 40% increase relative to the original rate.
              </p>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-4">
                Percentage Increase = (New Rate - Original Rate) / Original Rate × 100
                <br />
                = (7% - 5%) / 5% × 100
                <br />
                = 2% / 5% × 100
                <br />
                = 0.40 × 100
                <br />
                = 40%
              </div>
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
              <h2 className="text-2xl font-semibold mb-4">Common Mistakes</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Confusing percentage points with percentages in rate changes</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Incorrectly calculating percentage changes in damages</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Misapplying percentage-based fee calculations</span>
                </li>
              </ul>
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
              <h2 className="text-2xl font-semibold mb-4">Real-World Examples</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Employment Discrimination Case</h3>
                  <p className="text-gray-600">
                    A case where percentage-based comparisons of salary increases between different 
                    employee groups led to incorrect conclusions about discrimination due to failure 
                    to account for different base salaries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Loan Interest Litigation</h3>
                  <p className="text-gray-600">
                    A dispute where miscalculation of percentage-based late fees resulted in 
                    significant overcharges across thousands of accounts.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default PercentageCalculations;
