import { ChevronDown, Heart, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 fill-current text-foreground" />
          <span className="text-lg font-semibold text-foreground">Lovable</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: "Solutions", hasDropdown: true },
            { label: "Resources", hasDropdown: true },
            { label: "Enterprise", hasDropdown: false },
            { label: "Pricing", hasDropdown: false },
            { label: "Community", hasDropdown: false },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block">
            Log in
          </button>
          <button className="hidden rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent md:block">
            Get started
          </button>
          <button
            className="rounded-md p-2 text-muted-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          {["Solutions", "Resources", "Enterprise", "Pricing", "Community"].map((label) => (
            <button
              key={label}
              className="block w-full py-2 text-left text-sm text-muted-foreground hover:text-foreground"
            >
              {label}
            </button>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <button className="text-sm text-muted-foreground">Log in</button>
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
