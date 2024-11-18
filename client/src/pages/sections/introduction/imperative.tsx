import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Imperative = () => {
  return (
    <SectionLayout
      title="The Imperative for Mathematical Literacy"
      description="Why mathematical literacy matters in modern legal practice"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Critical Importance</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Despite its importance, many legal professionals lack confidence in their mathematical 
                abilities. This deficiency can lead to misinterpretation of evidence, inequitable 
                outcomes, and missed opportunities in legal arguments.
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
              <h2 className="text-2xl font-semibold mb-4">Consequences of Mathematical Illiteracy</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Misinterpretation of Evidence: Accepting flawed expert testimony due to inability to challenge mathematical assertions</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Inequitable Outcomes: Inaccurate calculations of damages or settlements, disadvantaging clients</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Strategic Disadvantages: Missing opportunities to leverage quantitative data in legal arguments</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Imperative;
