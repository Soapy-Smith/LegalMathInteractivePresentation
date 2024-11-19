import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CompoundInterestVisualizer from "@/components/visualizations/compound-interest-visual";

const PresentValue = () => {
  return (
    <SectionLayout
      title="Present Value and Future Value Calculations"
      description="Understanding valuation principles in legal settlements"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Present Value Calculations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Present Value (PV) calculates the current worth of a future sum of money, essential 
                in legal settlements where future payments need to be valued today. The formula is:
              </p>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-4">
                PV = FV / (1 + r)^n
              </div>
              <p className="text-gray-600 mb-4">
                Where:
                <br />
                FV = Future Value
                <br />
                r = Discount rate (interest rate)
                <br />
                n = Number of periods
              </p>
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
              <h2 className="text-2xl font-semibold mb-4">Visualization</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Legal Applications</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Calculating lump-sum equivalents for structured settlements</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Valuing future damages in personal injury cases</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Assessing economic losses in wrongful termination cases</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default PresentValue;
