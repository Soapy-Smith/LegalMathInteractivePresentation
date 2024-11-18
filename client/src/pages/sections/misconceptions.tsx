import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const MathematicalMisconceptions = () => {
  return (
    <SectionLayout
      title="Common Mathematical Misconceptions in Law"
      description="Understanding and avoiding common mathematical errors in legal practice"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">The Prosecutor's Fallacy</h2>
              <p className="text-gray-600 leading-relaxed">
                One of the most common mathematical errors in legal reasoning is the prosecutor's 
                fallacy, where the probability of evidence given innocence is confused with the 
                probability of innocence given evidence.
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
              <h2 className="text-2xl font-semibold mb-4">Base Rate Fallacy</h2>
              <p className="text-gray-600 leading-relaxed">
                The base rate fallacy occurs when the underlying probability of an event is ignored 
                in favor of specific case information. This is particularly relevant in cases 
                involving statistical evidence.
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
              <h2 className="text-2xl font-semibold mb-4">Independence Assumption</h2>
              <p className="text-gray-600 leading-relaxed">
                Incorrectly assuming events are independent when they may be related is another 
                common error, as seen in the Sally Clark case where multiple SIDS deaths in the 
                same family were assumed to be independent events.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default MathematicalMisconceptions;
