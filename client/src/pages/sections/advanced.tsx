import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AdvancedApplications = () => {
  return (
    <SectionLayout
      title="Advanced Applications and Theory"
      description="Advanced mathematical concepts and their applications in legal practice"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Regression Analysis</h2>
              <p className="text-gray-600 leading-relaxed">
                Regression analysis is a powerful tool for understanding relationships between 
                variables and controlling for multiple factors in legal cases, particularly in 
                discrimination and economic damage cases.
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
              <h2 className="text-2xl font-semibold mb-4">Decision Theory</h2>
              <p className="text-gray-600 leading-relaxed">
                Decision theory provides a framework for making optimal choices under uncertainty, 
                which is particularly relevant in settlement negotiations and risk assessment.
              </p>
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
              <h2 className="text-2xl font-semibold mb-4">Time-Motion Studies</h2>
              <p className="text-gray-600 leading-relaxed">
                Mathematical models for analyzing efficiency and resource allocation in legal 
                processes, helping optimize workflow and improve access to justice.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default AdvancedApplications;
