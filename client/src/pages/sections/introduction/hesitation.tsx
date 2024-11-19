import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LegalFlowchart from "@/components/visualizations/legal-flowchart";

const Hesitation = () => {
  return (
    <SectionLayout
      title="Mathematical Hesitation in Legal Practice"
      description="Understanding and addressing the legal profession's reluctance toward mathematics"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Educational Pathways</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The curriculum in law schools traditionally lacks extensive training in mathematics 
                or quantitative methods. This absence reinforces the notion that math is peripheral 
                to legal practice. Law students typically come from diverse academic disciplines, but 
                many choose law precisely because it is perceived as a field that emphasizes qualitative 
                analysis over quantitative reasoning.
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
              <h2 className="text-2xl font-semibold mb-4">Math Anxiety</h2>
              <Alert className="mb-6">
                <AlertTitle>Understanding Math Anxiety in Legal Practice</AlertTitle>
                <AlertDescription>
                  Math anxiety is a common phenomenon where individuals experience tension or fear 
                  when confronted with mathematical tasks. This anxiety can deter legal professionals 
                  from engaging with quantitative aspects of cases.
                </AlertDescription>
              </Alert>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Perception of Irrelevance</h3>
                  <p className="text-gray-600">
                    There's a misconception that mathematics is not integral to the practice of law, 
                    leading attorneys to delegate quantitative matters to experts rather than developing 
                    their own competence.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Complexity of Advanced Math</h3>
                  <p className="text-gray-600">
                    The specialized nature of higher-level mathematics, such as calculus or advanced 
                    statistics, can be intimidating, fostering a belief that these areas are inaccessible 
                    without extensive study.
                  </p>
                </div>
              </div>
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
              <h2 className="text-2xl font-semibold mb-4">Mathematical Logic in Legal Reasoning</h2>
              <p className="text-gray-600 mb-6">
                Despite this hesitation, legal professionals inherently use mathematical logic in their 
                daily work, often without realizing it. The practice of law involves structured reasoning, 
                critical analysis, and the application of consistent principles—all of which parallel 
                mathematical thinking.
              </p>
              
              {/* New Legal Flowchart */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Legal Reasoning Process</h3>
                <LegalFlowchart />
              </div>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Precedent Analysis</h3>
                  <p className="text-gray-600">
                    Evaluating prior cases requires identifying relevant variables and outcomes, 
                    assessing similarities and differences—a process comparable to comparing 
                    functions or variables in math.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Case Distinction</h3>
                  <p className="text-gray-600">
                    The process of distinguishing cases involves analyzing factual patterns and 
                    identifying meaningful differences, similar to pattern recognition in mathematics.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Outcome Evaluation</h3>
                  <p className="text-gray-600">
                    Legal professionals must evaluate the justice and fairness of outcomes through 
                    a systematic analysis of factors and implications, much like evaluating solutions 
                    in mathematical problem-solving.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default Hesitation;