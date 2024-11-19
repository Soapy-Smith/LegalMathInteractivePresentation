import { SectionLayout } from "@/components/layout/section-layout";
import { motion } from "framer-motion";

const App = () => {
  return (
    <SectionLayout 
      title=""  // Empty title since we're using custom title styling
      description=""
    >
      <div className="min-h-[calc(100vh-200px)] w-full relative">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
            backgroundSize: '50px 50px',
            opacity: 0.05
          }}>
        </div>

        {/* Main Content */}
        <motion.div 
          className="relative z-10 container mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Lines */}
          <div className="absolute top-24 left-0 right-0 opacity-10">
            <div className="h-px bg-primary w-full transform -rotate-2"></div>
            <div className="h-px bg-primary w-full transform rotate-1 mt-1"></div>
          </div>

          {/* Title Section */}
          <div className="mt-24 mb-16 text-center">
            <motion.h1 
              className="text-6xl font-serif font-bold text-primary leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mathematical
              <br />
              Illiteracy
              <br />
              in the Law
            </motion.h1>
          </div>

          {/* Mathematical Formulas */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-15 text-primary mx-auto max-w-4xl my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Probability */}
            <div className="text-lg font-serif">
              P(A|B) = <span className="inline-block">
                <span className="border-b border-primary">P(B|A)P(A)</span>
                <br />
                P(B)
              </span>
            </div>

            {/* Standard Deviation */}
            <div className="text-lg font-serif text-right">
              σ = √<span className="inline-block">
                <span className="border-b border-primary">Σ(x-μ)²</span>
                <br />
                n
              </span>
            </div>

            {/* Z-Score */}
            <div className="text-lg font-serif">
              z = <span className="inline-block">
                <span className="border-b border-primary">x - μ</span>
                <br />
                σ
              </span>
            </div>

            {/* Chi-Square */}
            <div className="text-lg font-serif text-right">
              χ² = Σ<span className="inline-block">
                <span className="border-b border-primary">(O-E)²</span>
                <br />
                E
              </span>
            </div>
          </motion.div>

          {/* Presenter Information */}
          <motion.div 
            className="text-center mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl font-serif text-primary mb-4">
              Presented by
            </p>
            <h2 className="text-3xl font-serif font-bold text-primary mb-16">
              Garrick T. Lankford
            </h2>
          </motion.div>

          {/* Bottom Decorative Lines */}
          <div className="absolute bottom-24 left-0 right-0 opacity-10">
            <div className="h-px bg-primary w-full transform rotate-2"></div>
            <div className="h-px bg-primary w-full transform -rotate-1 mt-1"></div>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default App;
