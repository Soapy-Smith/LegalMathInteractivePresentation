import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CompoundInterestVisualizer = () => {
  // Generate compound vs simple interest data
  const generateInterestData = () => {
    const data = [];
    const principal = 100000;
    const rate = 0.05;
    const years = 10;

    for (let year = 0; year <= years; year++) {
      data.push({
        year,
        compound: Math.round(principal * Math.pow(1 + rate, year)),
        simple: Math.round(principal * (1 + rate * year)),
        present: Math.round(principal / Math.pow(1 + rate, year))
      });
    }
    return data;
  };

  const data = generateInterestData();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Compound vs Simple Interest Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" label={{ value: 'Years', position: 'bottom' }} />
            <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'left' }} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="compound" 
              stroke="#8884d8" 
              name="Compound Interest" 
            />
            <Line 
              type="monotone" 
              dataKey="simple" 
              stroke="#82ca9d" 
              name="Simple Interest" 
            />
            <Line 
              type="monotone" 
              dataKey="present" 
              stroke="#ff7300" 
              name="Present Value" 
            />
          </LineChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompoundInterestVisualizer;
