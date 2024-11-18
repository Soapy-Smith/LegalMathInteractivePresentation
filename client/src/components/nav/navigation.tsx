import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { sections } from "@/lib/sections";
import { useLocation } from "wouter";

export const Navigation = () => {
  const [location] = useLocation();

  return (
    <NavigationMenu className="max-w-screen-xl mx-auto p-4">
      <NavigationMenuList className="flex space-x-4">
        {sections.map((section) => (
          <NavigationMenuItem key={section.id}>
            <NavigationMenuLink
              href={section.path}
              className={`px-4 py-2 rounded-md transition-colors ${
                location === section.path
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {section.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
