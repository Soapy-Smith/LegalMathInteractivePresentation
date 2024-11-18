import { useLocation } from "wouter";
import { sections, type Section } from "@/lib/sections";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Book, Calculator, LineChart, AlertTriangle, Wrench, Brain } from "lucide-react";
import { useState } from "react";

const getSectionIcon = (id: string) => {
  const icons: Record<string, JSX.Element> = {
    introduction: <Book className="w-5 h-5" />,
    "statistical-literacy": <LineChart className="w-5 h-5" />,
    "financial-calculations": <Calculator className="w-5 h-5" />,
    misconceptions: <AlertTriangle className="w-5 h-5" />,
    tools: <Wrench className="w-5 h-5" />,
    advanced: <Brain className="w-5 h-5" />,
  };
  return icons[id] || <Book className="w-5 h-5" />;
};

const TableOfContentsItem = ({ section, level = 0, isMinimized }: { section: Section; level?: number; isMinimized: boolean }) => {
  const [location] = useLocation();
  
  return (
    <div className="space-y-1">
      <motion.a
        href={section.path}
        className={cn(
          "block p-2 rounded-md transition-colors flex items-center gap-2",
          location === section.path
            ? "bg-primary/10 text-primary font-medium"
            : "hover:bg-gray-100",
          level > 0 && !isMinimized && "ml-4 text-sm"
        )}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {getSectionIcon(section.id)}
        {!isMinimized && (
          <span className="truncate">{section.title}</span>
        )}
      </motion.a>
      <AnimatePresence>
        {!isMinimized && section.subSections && (
          <motion.div
            className="space-y-1"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {section.subSections.map((subSection) => (
              <TableOfContentsItem 
                key={subSection.id} 
                section={subSection} 
                level={level + 1}
                isMinimized={isMinimized}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TableOfContents = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <motion.div 
      className="sticky top-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        width: isMinimized ? "auto" : undefined
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <motion.h2 
          className="text-lg font-semibold"
          animate={{ opacity: isMinimized ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {!isMinimized && "Table of Contents"}
        </motion.h2>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="p-1 hover:bg-gray-100 rounded-md transition-colors"
        >
          {isMinimized ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>
      <nav className={cn(
        "p-4 space-y-2 transition-all duration-300",
        isMinimized ? "w-12" : "w-full"
      )}>
        {sections.map((section) => (
          <TableOfContentsItem 
            key={section.id} 
            section={section}
            isMinimized={isMinimized}
          />
        ))}
      </nav>
    </motion.div>
  );
};
