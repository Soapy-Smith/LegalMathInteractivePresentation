import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const KeyApplications = () => {
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
    <Card>
      <CardHeader>
        <CardTitle>Key Mathematical Applications in Law</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {applicationData.map((category, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold" style={{color: COLORS[index % COLORS.length]}}>
                {category.category}
              </h4>
              <ul className="list-disc pl-6 text-sm text-gray-600 mt-2">
                {category.examples.map((example, i) => (
                  <li key={i} className="mb-1">{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyApplications;
