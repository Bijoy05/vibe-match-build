import {
  Home,
  Search,
  BookOpen,
  LayoutGrid,
  Star,
  Users,
  FileText,
  Gift,
  Zap,
  ChevronDown,
  Sun,
  Moon,
  PanelLeft,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const DashboardSidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex h-full w-56 flex-col border-r border-border/40 bg-card dark:bg-[hsl(0,0%,16%)]">
      {/* Top section */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <Zap className="h-5 w-5 fill-current text-foreground" />
        <button className="text-muted-foreground hover:text-foreground">
          <PanelLeft className="h-4 w-4" />
        </button>
      </div>

      {/* User */}
      <div className="mx-3 mb-4 flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-accent">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
          B
        </div>
        <span className="flex-1 text-sm font-medium text-foreground">User's Von</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 px-3">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Search, label: "Search" },
          { icon: BookOpen, label: "Resources" },
        ].map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
              active
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Projects */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-muted-foreground">Projects</p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {[
          { icon: LayoutGrid, label: "All projects" },
          { icon: Star, label: "Starred" },
          { icon: Users, label: "Shared with me" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Recents */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-muted-foreground">Recents</p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {["Project Alpha", "Marketing Site", "Dashboard v2"].map((name) => (
          <button
            key={name}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <FileText className="h-4 w-4" />
            {name}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-1 border-t border-border/40 p-3">
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          <div className="flex items-center gap-3">
            <Gift className="h-4 w-4" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Share Von</p>
              <p className="text-xs text-muted-foreground">Get 10 credits each</p>
            </div>
          </div>
        </button>
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          <div className="flex items-center gap-3">
            <Zap className="h-4 w-4 text-amber-400" />
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Upgrade to Pro</p>
              <p className="text-xs text-muted-foreground">Unlock more benefits</p>
            </div>
          </div>
        </button>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
