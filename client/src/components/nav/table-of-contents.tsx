import { useLocation } from "wouter";
import { sections, type Section } from "@/lib/sections";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TableOfContentsItem = ({ section, level = 0 }: { section: Section; level?: number }) => {
  const [location] = useLocation();
  
  return (
    <div className="space-y-1">
      <motion.a
        href={section.path}
        className={cn(
          "block p-2 rounded-md transition-colors",
          location === section.path
            ? "bg-primary/10 text-primary font-medium"
            : "hover:bg-gray-100",
          level > 0 && "ml-4 text-sm"
        )}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {section.title}
      </motion.a>
      {section.subSections && (
        <div className="space-y-1">
          {section.subSections.map((subSection) => (
            <TableOfContentsItem 
              key={subSection.id} 
              section={subSection} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const TableOfContents = () => {
  return (
    <motion.div 
      className="sticky top-4 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <nav className="space-y-2">
        {sections.map((section) => (
          <TableOfContentsItem key={section.id} section={section} />
        ))}
      </nav>
    </motion.div>
  );
};
