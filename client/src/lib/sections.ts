export interface Section {
  id: string;
  title: string;
  description: string;
  path: string;
  subSections?: Section[];
}

export const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    description: "The Convergence of Law and Mathematics",
    path: "/",
    subSections: [
      {
        id: "convergence",
        title: "The Convergence of Law and Mathematics",
        description: "Understanding the intersection of legal and mathematical principles",
        path: "/convergence"
      },
      {
        id: "imperative",
        title: "The Imperative for Mathematical Literacy",
        description: "Why mathematical literacy matters in law",
        path: "/imperative"
      }
    ]
  },
  {
    id: "statistical-literacy",
    title: "Statistical Literacy in Legal Contexts",
    description: "Understanding statistical analysis in legal cases",
    path: "/statistical-literacy",
    subSections: [
      {
        id: "fundamentals",
        title: "Fundamentals of Statistical Analysis",
        description: "Basic statistical concepts in legal contexts",
        path: "/statistical-literacy/fundamentals"
      },
      {
        id: "case-studies",
        title: "Statistical Case Studies",
        description: "Real-world applications of statistics in law",
        path: "/statistical-literacy/case-studies"
      }
    ]
  },
  {
    id: "financial-calculations",
    title: "Financial Calculations in Legal Settlements",
    description: "The role of mathematics in legal finance",
    path: "/financial-calculations",
    subSections: [
      {
        id: "time-value",
        title: "Time Value of Money",
        description: "Understanding the time value concept in legal settlements",
        path: "/financial-calculations/time-value"
      },
      {
        id: "present-value",
        title: "Present Value Calculations",
        description: "Present and future value calculations in legal contexts",
        path: "/financial-calculations/present-value"
      },
      {
        id: "compound-interest",
        title: "Compound Interest Analysis",
        description: "Complex interest calculations and legal implications",
        path: "/financial-calculations/compound-interest"
      },
      {
        id: "case-studies",
        title: "Financial Case Studies",
        description: "Analysis of significant financial law cases",
        path: "/financial-calculations/case-studies"
      }
    ]
  },
  {
    id: "misconceptions",
    title: "Mathematical Misconceptions",
    description: "Common mathematical errors in legal practice",
    path: "/misconceptions",
    subSections: [
      {
        id: "prosecutors-fallacy",
        title: "The Prosecutor's Fallacy",
        description: "Understanding statistical fallacies in legal reasoning",
        path: "/misconceptions/prosecutors-fallacy"
      },
      {
        id: "independence-assumption",
        title: "Independence Assumption",
        description: "Errors in assuming event independence",
        path: "/misconceptions/independence-assumption"
      }
    ]
  },
  {
    id: "tools",
    title: "Mathematical Tools",
    description: "Essential tools and technologies for legal analysis",
    path: "/tools",
    subSections: [
      {
        id: "spreadsheets",
        title: "Spreadsheets and Financial Modeling",
        description: "Using spreadsheets for legal calculations",
        path: "/tools/spreadsheets"
      },
      {
        id: "statistical-software",
        title: "Statistical Software",
        description: "Tools for statistical analysis in law",
        path: "/tools/statistical-software"
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Applications",
    description: "Advanced mathematical concepts in legal practice",
    path: "/advanced",
    subSections: [
      {
        id: "regression",
        title: "Regression Analysis",
        description: "Advanced statistical techniques in legal cases",
        path: "/advanced/regression"
      },
      {
        id: "decision-theory",
        title: "Decision Theory",
        description: "Mathematical decision-making in legal contexts",
        path: "/advanced/decision-theory"
      }
    ]
  }
];