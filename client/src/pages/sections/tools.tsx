import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const MathematicalTools = () => {
  return (
    <SectionLayout
      title="Mathematical Tools and Technologies"
      description="Essential tools and technologies for legal professionals"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Spreadsheets and Financial Modeling</h2>
              <p className="text-gray-600 leading-relaxed">
                Spreadsheet applications like Excel provide powerful tools for financial calculations, 
                damage assessments, and statistical analysis. Understanding how to use these tools 
                effectively is crucial for modern legal practice.
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
              <h2 className="text-2xl font-semibold mb-4">Statistical Software</h2>
              <p className="text-gray-600 leading-relaxed">
                Statistical software packages provide advanced capabilities for analyzing large 
                datasets, conducting hypothesis tests, and creating visualizations for court 
                presentations.
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
              <h2 className="text-2xl font-semibold mb-4">AI and Machine Learning</h2>
              <p className="text-gray-600 leading-relaxed">
                Artificial intelligence and machine learning tools are increasingly being used in 
                legal practice for document analysis, prediction of case outcomes, and pattern 
                recognition in large legal datasets.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default MathematicalTools;
