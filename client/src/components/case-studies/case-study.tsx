import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface CaseStudy {
  title: string;
  description: string;
  details: string;
  impact: string;
}

interface CaseStudyProps {
  study: CaseStudy;
}

export const CaseStudyComponent = ({ study }: CaseStudyProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <CardHeader 
        className="cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{study.title}</CardTitle>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
        <p className="text-gray-600">{study.description}</p>
      </CardHeader>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Details</h4>
                <p className="text-gray-600">{study.details}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Impact</h4>
                <p className="text-gray-600">{study.impact}</p>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};

export const CaseStudies = ({ studies }: { studies: CaseStudy[] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold mb-4">Case Studies</h3>
      {studies.map((study, index) => (
        <motion.div
          key={study.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <CaseStudyComponent study={study} />
        </motion.div>
      ))}
    </div>
  );
};
