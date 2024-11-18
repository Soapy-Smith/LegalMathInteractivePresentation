import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import CompoundInterestVisualizer from "@/components/visualizations/compound-interest-visual";

const CompoundInterest = () => {
  return (
    <SectionLayout
      title="Compound Interest Analysis"
      description="Understanding complex interest calculations in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Interest Comparison</h2>
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
              <h2 className="text-2xl font-semibold mb-4">Legal Applications</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Pre-judgment Interest: Calculating interest on damages before judgment</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Post-judgment Interest: Interest accruing after judgment until payment</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Structured Settlements: Designing payment plans with compound interest</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default CompoundInterest;
