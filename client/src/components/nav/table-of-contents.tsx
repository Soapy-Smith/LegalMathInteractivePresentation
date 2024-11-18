import { useLocation } from "wouter";
import { sections } from "@/lib/sections";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TableOfContents = () => {
  const [location] = useLocation();

  return (
    <motion.div 
      className="sticky top-4 p-4 bg-white rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <motion.a
            key={section.id}
            href={section.path}
            className={cn(
              "block p-2 rounded-md transition-colors",
              location === section.path
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-gray-100"
            )}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {section.title}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};
