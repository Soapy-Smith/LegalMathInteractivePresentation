import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { TableOfContents } from "../nav/table-of-contents";

interface SectionLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const SectionLayout = ({ children, title, description }: SectionLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/images/Picture2.png"
                alt="Sanders Pianowski LLP Logo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.alt = "Sanders Pianowski LLP";
                  e.currentTarget.style.display = "none";
                }}
              />
            
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <Card className="p-8">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              {description && (
                <p className="text-gray-600 mb-8">{description}</p>
              )}
              {children}
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2024 Sanders Pianowski LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
