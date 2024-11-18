import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Spreadsheets = () => {
  return (
    <SectionLayout
      title="Spreadsheets and Financial Modeling"
      description="Using spreadsheets effectively for legal calculations"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Essential Functions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Spreadsheet applications provide crucial functions for legal calculations:
              </p>
              <ul className="space-y-2 text-gray-600 ml-6 list-disc">
                <li>Financial functions for damage calculations</li>
                <li>Statistical functions for data analysis</li>
                <li>Data visualization tools for court presentations</li>
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
              <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Document all assumptions and calculations clearly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Use named ranges for important variables</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Include error checking and validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Spreadsheets;
