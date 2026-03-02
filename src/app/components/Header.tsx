import { Link, useLocation } from "react-router-dom";
import { Home, Search, Users, Wrench } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/listings", label: "Browse", icon: Search },
    { path: "/roommate-finder", label: "Find Roommate", icon: Users },
    { path: "/repair-support", label: "Support", icon: Wrench },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
            <Home className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-semibold">RentAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:flex">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
