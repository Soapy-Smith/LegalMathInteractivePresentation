export interface Section {
  id: string;
  title: string;
  description: string;
  path: string;
}

export const sections: Section[] = [
  {
    id: "introduction",
    title: "Introduction",
    description: "The Convergence of Law and Mathematics",
    path: "/"
  },
  {
    id: "statistical-literacy",
    title: "Statistical Literacy in Legal Contexts",
    description: "Understanding statistical analysis in legal cases",
    path: "/statistical-literacy"
  },
  {
    id: "financial-calculations",
    title: "Financial Calculations in Legal Settlements",
    description: "The role of mathematics in legal finance",
    path: "/financial-calculations"
  }
];
