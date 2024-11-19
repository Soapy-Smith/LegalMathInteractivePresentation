import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const RicciStats = () => {
  // Pass rates data
  const passRatesData = [
    { group: "White Candidates", rate: 58 },
    { group: "Black Candidates", rate: 32 },
    { group: "Hispanic Candidates", rate: 20 }
  ];

  // Four-fifths rule analysis data
  const fourFifthsData = [
    { 
      group: "Black/White Ratio", 
      ratio: (32/58) * 100,
      threshold: 80,
      actual: "55%",
      compliant: false
    },
    { 
      group: "Hispanic/White Ratio", 
      ratio: (20/58) * 100,
      threshold: 80,
      actual: "34%",
      compliant: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Statistical Analysis of Ricci v. DeStefano</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertTitle>Four-Fifths Rule Analysis</AlertTitle>
            <AlertDescription>
              According to the EEOC's four-fifths (80%) rule, selection rates for protected groups should be at least 80% 
              of the highest group's rate to avoid potential discrimination claims. In this case, both minority groups' 
              rates fell significantly below this threshold.
            </AlertDescription>
          </Alert>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pass Rates by Racial Group</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={passRatesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis 
                    label={{ value: 'Pass Rate (%)', angle: -90, position: 'insideLeft' }}
                    domain={[0, 100]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="rate" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Four-Fifths Rule Compliance</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fourFifthsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="group" />
                  <YAxis 
                    label={{ value: 'Selection Rate Ratio (%)', angle: -90, position: 'insideLeft' }}
                    domain={[0, 100]}
                  />
                  <Tooltip 
                    formatter={(value, name, props) => [`${props.payload.actual}`, 'Actual Ratio']}
                  />
                  <ReferenceLine y={80} stroke="red" label="80% Threshold" strokeDasharray="3 3" />
                  <Bar 
                    dataKey="ratio" 
                    fill="#8884d8"
                    isAnimationActive={true}
                  >
                    {fourFifthsData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`}
                        fill={entry.compliant ? '#82ca9d' : '#ff8042'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Statistical Findings</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>White candidates passed at nearly twice the rate of Black candidates</li>
              <li>Hispanic candidates had the lowest pass rate at just 20%</li>
              <li>Both minority groups' selection rates fell well below the four-fifths threshold</li>
              <li>The disparity was statistically significant enough to raise Title VII concerns</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RicciStats;
