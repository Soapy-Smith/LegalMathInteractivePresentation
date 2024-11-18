import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const StatisticalFundamentals = () => {
  return (
    <SectionLayout
      title="Fundamentals of Statistical Analysis"
      description="Understanding basic statistical concepts in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Descriptive Statistics</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Descriptive statistics help summarize and organize data through measures such as:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Mean, Median, and Mode</li>
                <li>Variance and Standard Deviation</li>
                <li>Distribution Analysis</li>
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
              <h2 className="text-2xl font-semibold mb-4">Inferential Statistics</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Inferential statistics allow us to make predictions or inferences about populations based on samples:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Hypothesis Testing</li>
                <li>Confidence Intervals</li>
                <li>Regression Analysis</li>
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
              <h2 className="text-2xl font-semibold mb-4">Probability Theory</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding probability is essential for evaluating evidence and risks:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Conditional Probability</li>
                <li>Bayes' Theorem</li>
                <li>Error Rates and Significance Levels</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default StatisticalFundamentals;
