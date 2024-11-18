import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import TimeValueAnimations from "@/components/visualizations/time-value-animations";

const TimeValue = () => {
  return (
    <SectionLayout
      title="Time Value of Money"
      description="Understanding present and future value calculations in legal contexts"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Time Value Visualization</h2>
              <TimeValueAnimations />
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
              <h2 className="text-2xl font-semibold mb-4">Present Value</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Present Value (PV) calculates the current worth of a future sum of money given a 
                specific rate of return. This is crucial in legal settlements where future payments 
                need to be valued today.
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
              <h2 className="text-2xl font-semibold mb-4">Future Value</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Future Value (FV) determines how much a present sum of money will grow over time 
                with compound interest. This helps in calculating damages and long-term compensation.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default TimeValue;
