import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface MobileMenuProps {
  menuButtonClassName?: string;
}

const MobileMenu = ({ menuButtonClassName = "" }: MobileMenuProps) => {

  const aboutLinks = [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/projects", label: "Projects" },
    { href: "/solutions", label: "Our Solutions" },
    { href: "/segments", label: "Industry Segments" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ];

  const pricingLinks = [
    { href: "/pricing", label: "EMS Pricing" },
    { href: "/solar-pricing", label: "Solar Pricing" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className={`${menuButtonClassName} lg:hidden`}>
        <Button variant="outline" size="icon" className="p-1">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 w-full sm:max-w-sm">
        <div className="flex flex-col h-full">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-heading">Menu</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="about">
                <AccordionTrigger className="text-heading">About Us</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {aboutLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="block py-2 px-2 text-sm text-gray-600 hover:text-brandColor hover:bg-gray-50 rounded-md transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing">
                <AccordionTrigger className="text-heading">Pricing</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {pricingLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="block py-2 px-2 text-sm text-gray-600 hover:text-brandColor hover:bg-gray-50 rounded-md transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-4 space-y-2 border-t border-border pt-4">
              <Link
                to="/blogs"
                className="block py-2 px-2 text-sm font-medium text-heading hover:text-brandColor hover:bg-gray-50 rounded-md transition-colors"
              >
                News & Pubs
              </Link>
            </div>
          </div>

          <div className="p-4 border-t border-border space-y-2">
            <Link
              to="/sign-in"
              className="block w-full py-2 px-4 text-sm font-medium text-heading hover:text-brandColor hover:bg-gray-50 rounded-md transition-colors text-center"
            >
              Sign In
            </Link>
            <Link
              to="/get-started"
              className="block w-full py-2 px-4 text-sm font-medium text-white bg-brandColor hover:bg-brandColor/80 rounded-md transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;

