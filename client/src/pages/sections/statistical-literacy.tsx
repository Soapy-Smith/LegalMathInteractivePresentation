import { SectionLayout } from "@/components/layout/section-layout";
import LegalStatisticsVisualizer from "@/components/visualizations/legal-case-statistics";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudies, type CaseStudy } from "@/components/case-studies/case-study";

const caseStudies: CaseStudy[] = [
  {
    title: "The Sally Clark Case",
    description: "A landmark case highlighting statistical fallacies in legal reasoning",
    details: "Sally Clark, a British solicitor, was wrongfully convicted in 1999 for the murder of her two infant sons who died suddenly. The prosecution's case heavily relied on statistical evidence presented by Professor Sir Roy Meadow.",
    impact: "Clark's conviction was overturned in 2003 after serving more than three years in prison. The case underscores the necessity for mathematical proficiency in legal professionals."
  },
  {
    title: "McCleskey v. Kemp (1987)",
    description: "Statistical analysis in death penalty discrimination cases",
    details: "Warren McCleskey challenged his death sentence using the Baldus Study, which showed significant racial disparities in death penalty sentencing.",
    impact: "The Supreme Court acknowledged the statistical evidence but ruled it insufficient without proof of intentional discrimination in McCleskey's specific case."
  }
];

const StatisticalLiteracy = () => {
  return (
    <SectionLayout
      title="Statistical Literacy in Legal Contexts"
      description="Understanding and applying statistical analysis in legal cases"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Case Analysis</h2>
              <LegalStatisticsVisualizer />
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
              <CaseStudies studies={caseStudies} />
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
              <h2 className="text-2xl font-semibold mb-4">Understanding Statistical Evidence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Statistics provides essential tools for analyzing legal evidence, from DNA analysis 
                to employment discrimination cases. Understanding statistical concepts is crucial 
                for legal professionals to make informed decisions and present compelling arguments.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default StatisticalLiteracy;
