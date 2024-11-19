import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

const MathFormulas = () => {
  const formulas = [
    {
      title: "Standard Deviation",
      formula: "\\[\\sigma = \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{N}}\\]",
      path: "M10 90 C 50 90 50 10 100 10 S 150 10 190 90"
    },
    {
      title: "Z-Score",
      formula: "\\[Z = \\frac{X - \\mu}{\\sigma}\\]",
      path: "M10 90 C 50 90 50 10 100 10 S 150 10 190 90"
    },
    {
      title: "Multiple Regression",
      formula: "\\[Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_n X_n + \\epsilon\\]",
      path: "M10 90 L 190 10"
    },
    {
      title: "Present Value",
      formula: "\\[PV = \\frac{FV}{(1 + r)^n}\\]",
      path: "M10 10 C 50 10 50 90 190 90"
    }
  ];

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [["$", "$"]],
      displayMath: [["\\[", "\\]"]]
    }
  };

  return (
    <MathJaxContext config={config}>
      <Card>
        <CardHeader>
          <CardTitle>Key Statistical Formulas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formulas.map((formula, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{formula.title}</h3>
                <div className="mb-4">
                  <MathJax>{formula.formula}</MathJax>
                </div>
                <div className="flex justify-center">
                  <svg className="w-48 h-24" viewBox="0 0 200 100">
                    <path
                      d={formula.path}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                    />
                    <line x1="10" y1="90" x2="190" y2="90" stroke="currentColor" strokeWidth="1" />
                    {formula.title === "Z-Score" && (
                      <line x1="100" y1="10" x2="100" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                    )}
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </MathJaxContext>
  );
};

export default MathFormulas;
