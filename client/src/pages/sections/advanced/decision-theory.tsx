import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const DecisionTheory = () => {
  return (
    <SectionLayout
      title="Decision Theory"
      description="Mathematical decision-making in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Applications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Decision theory provides a framework for making optimal choices under uncertainty:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Settlement negotiations</li>
                <li>Risk assessment in legal strategy</li>
                <li>Resource allocation in legal practice</li>
              </ul>
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
              <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Expected value analysis in legal decisions</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Utility functions and risk preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Game theory in legal strategy</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default DecisionTheory;
