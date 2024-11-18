import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const LegalStatisticsVisualizer = () => {
  // Sally Clark Case Data
  const probabilityData = [
    { event: 'Single SIDS', probability: 1/8543, label: '1 in 8,543' },
    { event: 'Double SIDS (Independent)', probability: 1/72981849, label: '1 in 73 million' },
    { event: 'Double SIDS (Actual)', probability: 1/100, label: '~1 in 100' }
  ];

  // Employment Discrimination Data
  const discriminationData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    malePromotions: 8 + Math.floor(Math.random() * 3),
    femalePromotions: 4 + Math.floor(Math.random() * 2),
    expected: 6
  }));

  // Generate time series data for mortgage calculations
  const generateMortgageData = () => {
    const data = [];
    const principal = 200000;
    const rate = 0.065;
    const months = 24;

    let balance = principal;
    for (let month = 0; month <= months; month++) {
      const correctPayment = 1264.14;
      const incorrectPayment = 1433.79;
      
      data.push({
        month,
        correctBalance: Math.round(balance),
        incorrectBalance: Math.round(balance * (1 + rate/12)),
        difference: Math.round((balance * (1 + rate/12)) - balance)
      });

      balance = balance - correctPayment;
    }
    return data;
  };

  return (
    <div className="space-y-8">
      {/* Sally Clark Case Probability Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Sally Clark Case: Probability Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart width={600} height={300} data={probabilityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="event" />
            <YAxis type="log" domain={['auto', 'auto']} />
            <Tooltip />
            <Legend />
            <Bar dataKey="probability" fill="#8884d8" name="Probability" />
          </BarChart>
        </CardContent>
      </Card>

      {/* Employment Discrimination Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Employment Discrimination Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={600} height={300} data={discriminationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: 'Month', position: 'bottom' }} />
            <YAxis label={{ value: 'Number of Promotions', angle: -90, position: 'left' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="malePromotions" stroke="#8884d8" name="Male Promotions" />
            <Line type="monotone" dataKey="femalePromotions" stroke="#82ca9d" name="Female Promotions" />
            <Line type="dotted" dataKey="expected" stroke="#ff7300" name="Expected Equal Distribution" />
          </LineChart>
        </CardContent>
      </Card>

      {/* Mortgage Calculation Error Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Mortgage Calculation Error Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <AreaChart width={600} height={300} data={generateMortgageData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" label={{ value: 'Month', position: 'bottom' }} />
            <YAxis label={{ value: 'Balance ($)', angle: -90, position: 'left' }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="correctBalance" stackId="1" stroke="#8884d8" fill="#8884d8" name="Correct Balance" />
            <Area type="monotone" dataKey="incorrectBalance" stackId="2" stroke="#82ca9d" fill="#82ca9d" name="Incorrect Balance" />
            <Area type="monotone" dataKey="difference" stackId="3" stroke="#ff7300" fill="#ff7300" name="Difference" />
          </AreaChart>
        </CardContent>
      </Card>
    </div>
  );
};

export default LegalStatisticsVisualizer;
