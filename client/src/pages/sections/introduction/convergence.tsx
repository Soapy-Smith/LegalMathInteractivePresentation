import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import KeyApplications from "@/components/visualizations/key-applications";
import MathFormulas from "@/components/visualizations/math-formulas";

const Convergence = () => {
  return (
    <SectionLayout
      title="The Convergence of Law and Mathematics"
      description="Understanding the intersection of legal and mathematical principles"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">The Modern Legal Landscape</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The modern legal landscape is increasingly complex, characterized by vast amounts 
                of data, sophisticated financial transactions, and intricate statistical evidence. 
                Legal professionals must navigate this terrain adeptly, requiring a blend of legal 
                acumen and mathematical proficiency.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <KeyApplications />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <MathFormulas />
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Convergence;
