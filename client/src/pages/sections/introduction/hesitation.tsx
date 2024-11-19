import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Hesitation = () => {
  const logicalReasoningSteps = [
    {
      id: "premises",
      title: "Premise",
      content: "If all contracts require consideration",
      x: 50,
      y: 50
    },
    {
      id: "facts",
      title: "Fact",
      content: "Agreement lacks consideration",
      x: 200,
      y: 50
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: "Not a valid contract",
      x: 350,
      y: 50
    }
  ];

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
              
              {/* Logical Reasoning Flow Chart */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4">Legal Reasoning Structure</h3>
                <svg className="w-full h-48">
                  {/* Arrows */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#475569" />
                    </marker>
                  </defs>
                  <line
                    x1="120"
                    y1="50"
                    x2="180"
                    y2="50"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  <line
                    x1="270"
                    y1="50"
                    x2="330"
                    y2="50"
                    stroke="#475569"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead)"
                  />
                  
                  {/* Boxes */}
                  {logicalReasoningSteps.map((step, index) => (
                    <g key={step.id}>
                      <rect
                        x={step.x - 40}
                        y={step.y - 25}
                        width="80"
                        height="50"
                        rx="5"
                        fill="white"
                        stroke="#475569"
                        strokeWidth="2"
                      />
                      <text
                        x={step.x}
                        y={step.y}
                        textAnchor="middle"
                        className="text-sm font-medium"
                        fill="#1f2937"
                      >
                        {step.title}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Statutory Interpretation</h3>
                  <p className="text-gray-600">
                    Interpreting laws often involves analyzing the structure and language of statutes, 
                    which can include conditional ("if-then") statements, akin to logical operators 
                    in mathematics.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Precedent Analysis</h3>
                  <p className="text-gray-600">
                    Evaluating prior cases requires identifying relevant variables and outcomes, 
                    assessing similarities and differences—a process comparable to comparing 
                    functions or variables in math.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Balancing Tests</h3>
                  <p className="text-gray-600">
                    Courts frequently employ balancing tests to weigh competing interests, such as 
                    individual rights versus public safety. This involves assessing the magnitude 
                    of each interest, similar to assigning values in mathematical equations.
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
