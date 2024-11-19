import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const LawMathConvergence = () => {
  // Data for case complexity over time
  const complexityData = [
    { year: 1970, complexity: 20, cases: 15 },
    { year: 1980, complexity: 35, cases: 25 },
    { year: 1990, complexity: 55, cases: 40 },
    { year: 2000, complexity: 70, cases: 60 },
    { year: 2010, complexity: 85, cases: 75 },
    { year: 2020, complexity: 95, cases: 90 }
  ];

  // Data for mathematical applications in law
  const applicationData = [
    { 
      category: "Statistical Evidence", 
      value: 35,
      examples: [
        "DNA Analysis",
        "Employment Discrimination",
        "Environmental Impact"
      ]
    },
    { 
      category: "Financial Calculations", 
      value: 30,
      examples: [
        "Damages Assessment",
        "Securities Fraud",
        "Patent Valuation"
      ]
    },
    { 
      category: "Logical Reasoning", 
      value: 20,
      examples: [
        "Case Analysis",
        "Legal Arguments",
        "Precedent Application"
      ]
    },
    { 
      category: "Data Analytics", 
      value: 15,
      examples: [
        "E-Discovery",
        "Compliance Monitoring",
        "Risk Assessment"
      ]
    }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>The Convergence of Law and Mathematics</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTitle>Modern Legal Complexity</AlertTitle>
            <AlertDescription>
              The modern legal landscape increasingly requires mathematical and statistical literacy
              to effectively analyze evidence, calculate damages, and construct logical arguments.
            </AlertDescription>
          </Alert>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Evolution of Legal Case Complexity</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={complexityData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="complexity" stroke="#8884d8" name="Complexity Score" />
                  <Line type="monotone" dataKey="cases" stroke="#82ca9d" name="Cases with Math/Stats" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Trend showing increasing complexity of legal cases and growing reliance on mathematical evidence
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mathematical Applications in Law</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={applicationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {applicationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Applications</h3>
              {applicationData.map((category, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-semibold" style={{color: COLORS[index % COLORS.length]}}>
                    {category.category}
                  </h4>
                  <ul className="list-disc pl-6 text-sm">
                    {category.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Statistical Evidence</h4>
              <p className="text-sm">
                Interpretation of probabilities, significance testing, and data analysis in legal cases
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Financial Calculations</h4>
              <p className="text-sm">
                Complex damage calculations, economic impact assessment, and financial modeling
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2">Logical Reasoning</h4>
              <p className="text-sm">
                Application of mathematical logic to strengthen legal arguments and analysis
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LawMathConvergence;
