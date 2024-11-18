import { SectionLayout } from "@/components/layout/section-layout";
import { sections } from "@/lib/sections";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChartBar, Calculator, BookOpen } from "lucide-react";

const SectionIndex = () => {
  const [, setLocation] = useLocation();

  const sectionIcons = {
    introduction: <BookOpen className="w-6 h-6" />,
    "statistical-literacy": <ChartBar className="w-6 h-6" />,
    "financial-calculations": <Calculator className="w-6 h-6" />,
  };

  return (
    <SectionLayout
      title="Law and Mathematics"
      description="Explore the intersection of mathematical principles and legal practice through interactive visualizations and detailed case studies."
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full transition-transform hover:scale-105">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {sectionIcons[section.id as keyof typeof sectionIcons]}
                  </div>
                </div>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 min-h-[4rem]">
                  {section.description}
                </p>
                <Button
                  className="w-full group"
                  onClick={() => setLocation(section.path)}
                >
                  Explore Section
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Why Mathematical Literacy Matters in Law
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-2">Evidence Analysis</h3>
                <p className="text-gray-600">
                  Understand and interpret statistical evidence, probability calculations, and data-driven arguments.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Financial Accuracy</h3>
                <p className="text-gray-600">
                  Calculate damages, settlements, and financial implications with precision and confidence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Logical Reasoning</h3>
                <p className="text-gray-600">
                  Apply mathematical principles to strengthen legal arguments and identify logical fallacies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionLayout>
  );
};

export default SectionIndex;
