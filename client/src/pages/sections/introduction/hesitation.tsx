import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Hesitation = () => {
  // Data for visualization of educational backgrounds
  const educationData = [
    { background: "Humanities", percentage: 45 },
    { background: "Social Sciences", percentage: 30 },
    { background: "Business", percentage: 15 },
    { background: "STEM", percentage: 10 }
  ];

  // Data for math anxiety levels
  const anxietyData = [
    { level: "High Anxiety", value: 40, color: "#FF8042" },
    { level: "Moderate Anxiety", value: 35, color: "#FFBB28" },
    { level: "Low Anxiety", value: 15, color: "#00C49F" },
    { level: "No Anxiety", value: 10, color: "#0088FE" }
  ];

  return (
    <SectionLayout
      title="Mathematical Hesitation in Legal Practice"
      description="Understanding and addressing the legal profession's reluctance toward mathematical concepts"
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
              <p className="text-gray-600 leading-relaxed mb-6">
                Law students typically come from diverse academic disciplines, with many choosing law
                precisely because it is perceived as a field that emphasizes qualitative analysis over
                quantitative reasoning. The curriculum in law schools traditionally lacks extensive
                training in mathematics or quantitative methods.
              </p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={educationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="background" />
                    <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="percentage" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
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
              <h2 className="text-2xl font-semibold mb-4">Math Anxiety in Legal Professionals</h2>
              <Alert className="mb-6">
                <AlertTitle>Impact of Math Anxiety</AlertTitle>
                <AlertDescription>
                  Math anxiety can significantly affect legal professionals' confidence in handling
                  quantitative evidence and financial calculations, potentially impacting their
                  effectiveness in certain cases.
                </AlertDescription>
              </Alert>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={anxietyData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {anxietyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
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
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Logical Frameworks</h3>
                  <p className="text-gray-600">
                    Legal professionals inherently use mathematical logic in constructing arguments,
                    identifying premises, and drawing conclusions—similar to mathematical proofs.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Statutory Interpretation</h3>
                  <p className="text-gray-600">
                    Interpreting laws involves analyzing conditional statements and logical operators,
                    paralleling mathematical logic structures.
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Balancing Tests</h3>
                  <p className="text-gray-600">
                    Courts employ balancing tests to weigh competing interests, similar to assigning
                    values in mathematical equations.
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
