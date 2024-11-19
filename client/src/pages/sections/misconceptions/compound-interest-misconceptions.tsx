import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CompoundInterestVisualizer from "@/components/visualizations/compound-interest-visual";

const CompoundInterestMisconceptions = () => {
  return (
    <SectionLayout
      title="Compound Interest Misconceptions"
      description="Understanding common errors in compound interest calculations"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Simple vs. Compound Interest</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A fundamental misconception is treating compound interest as simple interest. 
                The difference becomes significant over time due to the exponential nature 
                of compound interest.
              </p>
              <CompoundInterestVisualizer />
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
              <h2 className="text-2xl font-semibold mb-4">Common Calculation Errors</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Using annual rates without proper conversion for more frequent compounding</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Failing to account for compounding periods in interest calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Incorrectly applying the compound interest formula to partial periods</span>
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
              <h2 className="text-2xl font-semibold mb-4">Case Examples</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mortgage Calculation Error</h3>
                  <p className="text-gray-600">
                    A bank's systematic error in converting annual rates to monthly compounding 
                    resulted in overcharging thousands of mortgage holders.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Investment Loss Case</h3>
                  <p className="text-gray-600">
                    A financial advisor's failure to account for compound interest in long-term 
                    investment projections led to significant underestimation of potential returns.
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

export default CompoundInterestMisconceptions;
