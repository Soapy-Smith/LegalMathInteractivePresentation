import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Regression = () => {
  return (
    <SectionLayout
      title="Regression Analysis"
      description="Advanced statistical techniques in legal cases"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Applications in Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Regression analysis helps identify relationships between variables and control for 
                multiple factors in legal cases. This is particularly valuable in:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Employment discrimination cases</li>
                <li>Economic damage calculations</li>
                <li>Market analysis for antitrust cases</li>
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
                  <span>Multiple regression for controlling variables</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Statistical significance in legal context</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Interpreting regression coefficients</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Regression;
