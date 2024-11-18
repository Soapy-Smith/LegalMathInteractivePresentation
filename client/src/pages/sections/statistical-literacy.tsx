import { SectionLayout } from "@/components/layout/section-layout";
import LegalStatisticsVisualizer from "@/components/visualizations/legal-case-statistics";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const StatisticalLiteracy = () => {
  return (
    <SectionLayout
      title="Statistical Literacy in Legal Contexts"
      description="Understanding and applying statistical analysis in legal cases"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Case Analysis</h2>
              <LegalStatisticsVisualizer />
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
              <h2 className="text-2xl font-semibold mb-4">Understanding Statistical Evidence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Statistics provides essential tools for analyzing legal evidence, from DNA analysis 
                to employment discrimination cases. Understanding statistical concepts is crucial 
                for legal professionals to make informed decisions and present compelling arguments.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default StatisticalLiteracy;
