import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Navigation } from "../nav/navigation";

interface SectionLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const SectionLayout = ({ children, title, description }: SectionLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-screen-xl mx-auto p-4 space-y-8">
        <Card className="p-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-gray-600 mb-8">{description}</p>
          )}
          {children}
        </Card>
      </main>
    </div>
  );
};
