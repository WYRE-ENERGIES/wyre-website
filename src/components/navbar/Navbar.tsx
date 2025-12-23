import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../../lib/navigation-menu-styles";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import MobileMenu from "./MobileMenu";


const ListItem = ({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string; title: string; children: React.ReactNode }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className="relative z-50 px-6">
      <nav className="flex items-center justify-between container mx-auto h-[80px]">
        <div className="flex items-center space-x-12">
          <Link to="/" className="text-white font-bold text-2xl">
            <Logo />
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white hover:text-white data-[state=open]:text-white">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px]">
                  <ListItem href="/what-we-do" title="What We Do">
                    Discover our mission and approach to energy management.
                  </ListItem>
                  <ListItem href="/projects" title="Projects">
                    Explore our completed projects and client success stories.
                  </ListItem>
                  <ListItem href="/solutions" title="Our Solutions">
                    Explore our comprehensive energy management platform.
                  </ListItem>
                  {/* <ListItem href="/team" title="Team">
                    Meet the team behind Wyre.
                  </ListItem> */}
                  <ListItem href="/segments" title="Industry Segments" className="-mt-3">
                    Discover how we serve different industry segments.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white hover:text-white data-[state=open]:text-white">
                Pricing
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px]">
                  <ListItem href="/pricing" title="EMS Pricing">
                    Compare our pricing plans for the Energy Management System.
                  </ListItem>
                  <ListItem href="/solar-pricing" title="Solar Pricing">
                    Compare our pricing plans and choose the best option for your business.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/blogs" className="bg-transparent text-white hover:bg-white/5 hover:text-white">
                  News & Pubs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="hidden lg:flex group hover:bg-white/5 text-white hover:border-white/10 hover:text-white" asChild>
            <Link to="/sign-in">
              Sign In <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </Button>
          <Button className="bg-white group text-gray-600 hover:bg-white/80 hover:text-black" asChild>
            <Link to="/get-started">
              Get Started
            </Link>
          </Button>
          <MobileMenu menuButtonClassName="text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
