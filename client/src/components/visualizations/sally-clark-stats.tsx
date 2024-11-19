import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const SallyClarkStats = () => {
  // Data for visualization with more accurate probability representations
  const independenceData = [
    { 
      name: "Single SIDS", 
      probability: Math.log10(8543), 
      actualProb: "1 in 8,543",
      displayValue: "8,543"
    },
    { 
      name: "Squared (Wrong)", 
      probability: Math.log10(8543 * 8543), 
      actualProb: "1 in 73 million",
      displayValue: "73,000,000"
    },
    { 
      name: "Actual Rate", 
      probability: Math.log10(100000), 
      actualProb: "~1 in 100,000",
      displayValue: "100,000"
    }
  ];

  const factorsData = [
    { name: "Genetic Factors", value: 30 },
    { name: "Environmental", value: 25 },
    { name: "Socioeconomic", value: 20 },
    { name: "Unknown", value: 25 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Statistical Analysis of the Sally Clark Case</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTitle>Critical Statistical Error in the Case</AlertTitle>
            <AlertDescription>
              The prosecution incorrectly squared the probability of a single SIDS death (1 in 8,543) to get 1 in 73 million,
              assuming the events were independent. This calculation was fundamentally flawed as it ignored genetic and
              environmental factors that could affect multiple children in the same family.
            </AlertDescription>
          </Alert>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Probability Comparison (Logarithmic Scale)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={independenceData}
                  layout="vertical"
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    type="number" 
                    domain={[0, 8]}
                    label={{ value: 'Log10 Scale', position: 'bottom' }}
                    tickFormatter={(value) => `1 in ${Math.pow(10, value).toLocaleString()}`}
                  />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip 
                    formatter={(value, name, props) => [`1 in ${props.payload.displayValue}`, 'Odds']}
                    labelFormatter={(value) => `Probability`}
                  />
                  <Bar dataKey="probability" fill="#8884d8">
                    {independenceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 1 ? '#ff4444' : '#8884d8'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-sm text-gray-600 mt-2">
              Note: Bar heights represent logarithmic scale to show the massive difference in probabilities
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Contributing Factors in SIDS Cases</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={factorsData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {factorsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Statistical Fallacies in the Case</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Independence Assumption: Incorrectly assumed SIDS deaths in same family were unrelated</li>
              <li>Base Rate Fallacy: Failed to consider overall frequency of multiple SIDS cases</li>
              <li>Prosecutor's Fallacy: Confused rarity of event with probability of guilt</li>
              <li>Simpson's Paradox: Ignored subgroup characteristics that could affect probability</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SallyClarkStats;
