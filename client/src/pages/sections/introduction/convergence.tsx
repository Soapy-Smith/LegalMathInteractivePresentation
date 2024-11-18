import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Applications</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Analyzing Statistical Evidence: Interpreting probabilities and statistical significance in cases</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Calculating Financial Damages: Determining accurate compensation through mathematical models</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Enhancing Logical Reasoning: Using mathematical principles to strengthen legal arguments</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Convergence;
