import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudies, type CaseStudy } from "@/components/case-studies/case-study";
import SallyClarkStats from "@/components/visualizations/sally-clark-stats";

const caseStudies: CaseStudy[] = [
  {
    title: "Sally Clark Case",
    description: "Statistical fallacies in criminal proceedings",
    details: "Sally Clark, a British solicitor, was wrongfully convicted in 1999 for the murder of her two infant sons. The prosecution's case heavily relied on statistical evidence presented by Professor Sir Roy Meadow, who made a fundamental error in probability calculation.",
    impact: "The case led to significant reforms in how statistical evidence is presented in court and highlighted the importance of proper statistical understanding in legal proceedings."
  },
  {
    title: "McCleskey v. Kemp (1987)",
    description: "Statistical evidence in death penalty cases",
    details: "Warren McCleskey challenged his death sentence using the Baldus Study, which demonstrated significant racial disparities in Georgia's capital sentencing process through comprehensive statistical analysis.",
    impact: "The Supreme Court's decision highlighted the challenges of using statistical evidence to prove discrimination, influencing future civil rights litigation."
  },
  {
    title: "Castaneda v. Partida (1977)",
    description: "Statistical proof of discrimination in jury selection",
    details: "Using statistical evidence, the case demonstrated significant underrepresentation of Mexican-Americans in grand jury service, with a calculated standard deviation of -29.15 from expected frequencies.",
    impact: "Established a precedent for using statistical analysis to prove discrimination in jury selection processes."
  }
];

const StatisticalCaseStudies = () => {
  return (
    <SectionLayout
      title="Statistical Case Studies in Law"
      description="Examining landmark cases where statistical analysis played a crucial role"
    >
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardContent className="p-6 space-y-8">
              <SallyClarkStats />
              <CaseStudies studies={caseStudies} />
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
              <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Proper interpretation of statistical evidence is crucial in legal proceedings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Statistical analysis can reveal systemic patterns of discrimination</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <span>Courts must carefully evaluate both the methodology and interpretation of statistical evidence</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default StatisticalCaseStudies;
