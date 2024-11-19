import React from 'react';

const PresentationCover = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Grid Pattern Overlay */}
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, #2c3e50 1px, transparent 0)',
               backgroundSize: '50px 50px',
               opacity: 0.05
             }}>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Decorative Lines */}
          <div className="absolute top-24 left-0 right-0 opacity-10">
            <div className="h-px bg-slate-800 w-full transform -rotate-2"></div>
            <div className="h-px bg-slate-800 w-full transform rotate-1 mt-1"></div>
          </div>

          {/* Title Section */}
          <div className="mt-24 mb-16 text-center">
            <h1 className="text-6xl font-serif font-bold text-slate-800 leading-tight">
              Mathematical
              <br />
              Illiteracy
              <br />
              in the Law
            </h1>
          </div>

          {/* Mathematical Formulas */}
          <div className="grid grid-cols-2 gap-8 opacity-15 text-slate-800 mx-auto max-w-4xl my-12">
            {/* Probability */}
            <div className="text-lg font-serif">
              P(A|B) = <span className="inline-block">
                <span className="border-b border-slate-800">P(B|A)P(A)</span>
                <br />
                P(B)
              </span>
            </div>

            {/* Standard Deviation */}
            <div className="text-lg font-serif text-right">
              σ = √<span className="inline-block">
                <span className="border-b border-slate-800">Σ(x-μ)²</span>
                <br />
                n
              </span>
            </div>

            {/* Z-Score */}
            <div className="text-lg font-serif">
              z = <span className="inline-block">
                <span className="border-b border-slate-800">x - μ</span>
                <br />
                σ
              </span>
            </div>

            {/* Chi-Square */}
            <div className="text-lg font-serif text-right">
              χ² = Σ<span className="inline-block">
                <span className="border-b border-slate-800">(O-E)²</span>
                <br />
                E
              </span>
            </div>
          </div>

          {/* Presenter Information */}
          <div className="text-center mt-24">
            <p className="text-xl font-serif text-slate-800 mb-4">
              Presented by
            </p>
            <h2 className="text-3xl font-serif font-bold text-slate-800 mb-16">
              Garrick T. Lankford
            </h2>
          </div>

          {/* Firm Name */}
          <div className="text-center mt-8">
            <div className="max-w-xl mx-auto">
              <div className="h-px bg-slate-800 opacity-30 mb-8"></div>
              <h3 className="text-2xl font-serif font-bold text-slate-800">
                SANDERS PIANOWSKI LLP
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Lines */}
        <div className="absolute bottom-24 left-0 right-0 opacity-10">
          <div className="h-px bg-slate-800 w-full transform rotate-2"></div>
          <div className="h-px bg-slate-800 w-full transform -rotate-1 mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PresentationCover;
