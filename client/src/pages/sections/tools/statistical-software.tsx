import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const StatisticalSoftware = () => {
  return (
    <SectionLayout
      title="Statistical Software"
      description="Tools for statistical analysis in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Analysis Capabilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Statistical software packages provide advanced capabilities for analyzing legal data:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Regression analysis for identifying patterns</li>
                <li>Hypothesis testing for evidence evaluation</li>
                <li>Data visualization for court presentations</li>
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
              <h2 className="text-2xl font-semibold mb-4">Software Options</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>R and RStudio for comprehensive statistical analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Python with libraries like SciPy and statsmodels</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>SPSS and Stata for user-friendly analysis</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default StatisticalSoftware;
