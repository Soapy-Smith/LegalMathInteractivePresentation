import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const IndependenceAssumption = () => {
  return (
    <SectionLayout
      title="Independence Assumption"
      description="Understanding errors in assuming event independence"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Statistical Independence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Statistical independence means that the occurrence of one event does not affect the 
                probability of another event. However, in legal contexts, events are often related 
                through underlying factors, making the independence assumption inappropriate.
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
              <h2 className="text-2xl font-semibold mb-4">Legal Implications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In cases like the Sally Clark case, incorrectly assuming independence led to 
                catastrophic errors in probability calculations. This highlights the importance 
                of considering potential relationships between events in legal statistical analysis.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default IndependenceAssumption;
