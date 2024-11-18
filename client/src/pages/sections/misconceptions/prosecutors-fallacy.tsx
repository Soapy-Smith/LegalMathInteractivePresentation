import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const ProsecutorsFallacy = () => {
  return (
    <SectionLayout
      title="The Prosecutor's Fallacy"
      description="Understanding statistical fallacies in legal reasoning"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Understanding the Fallacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The prosecutor's fallacy occurs when the probability of evidence given innocence 
                is confused with the probability of innocence given evidence. This is a fundamental 
                error in statistical reasoning that can lead to miscarriages of justice.
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
              <h2 className="text-2xl font-semibold mb-4">Example</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Consider a DNA match with a 1 in a million probability of a random match. The fallacy 
                is concluding there's a 1 in a million chance the defendant is innocent. This ignores 
                the base rate and other evidence, potentially leading to incorrect conclusions.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default ProsecutorsFallacy;
