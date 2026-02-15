import { useState, useRef } from "react";
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
  PanelLeft,
  User,
  Bell,
  Palette,
  Code,
  ArrowRight,
} from "lucide-react";
import { useMode } from "./ModeProvider";
import ProfileDropdown from "./ProfileDropdown";
import InboxDropdown from "./InboxDropdown";

type DashboardView = "home" | "all-projects" | "starred";

interface DashboardSidebarProps {
  currentView: DashboardView;
  onNavigate: (view: DashboardView) => void;
}

const DashboardSidebar = ({ currentView, onNavigate }: DashboardSidebarProps) => {
  const { mode, toggleMode } = useMode();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const userButtonRef = useRef<HTMLButtonElement>(null);
  const inboxButtonRef = useRef<HTMLButtonElement>(null);

  const isDesigner = mode === "designer";
  const unreadCount = 2; // Mock unread count

  return (
    <div className="flex h-full w-56 flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Top section */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <Zap className="h-5 w-5 fill-current text-white" />
        <button className="text-white/50 hover:text-white">
          <PanelLeft className="h-4 w-4" />
        </button>
      </div>

      {/* User */}
      <div className="mx-3 mb-4 flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/10 cursor-pointer">
        <div className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white ${
          isDesigner 
            ? "bg-gradient-to-br from-pink-500 to-orange-500" 
            : "bg-gradient-to-br from-purple-600 to-blue-600"
        }`}>
          B
        </div>
        <span className="flex-1 text-sm font-medium text-white">
          User's Von
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-white/50" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 px-3">
        <button
          onClick={() => onNavigate("home")}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
            currentView === "home"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Home className="h-4 w-4" />
          Home
        </button>
        <button className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <Search className="h-4 w-4" />
          Search
        </button>
        <button className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <BookOpen className="h-4 w-4" />
          Resources
        </button>
      </nav>

      {/* Projects */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-white/50">
          Projects
        </p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        <button
          onClick={() => onNavigate("all-projects")}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
            currentView === "all-projects"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <LayoutGrid className="h-4 w-4" />
          All projects
        </button>
        <button
          onClick={() => onNavigate("starred")}
          className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
            currentView === "starred"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          <Star className="h-4 w-4" />
          Starred
        </button>
        <button className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <Users className="h-4 w-4" />
          Shared with me
        </button>
      </nav>

      {/* Recents */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-white/50">
          Recents
        </p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {["Project Alpha", "Marketing Site", "Dashboard v2"].map((name) => (
          <button
            key={name}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FileText className="h-4 w-4" />
            {name}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-1 border-t border-white/10 p-3">
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <div className="flex items-center gap-3">
            <Gift className="h-4 w-4" />
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                Share Von
              </p>
              <p className="text-xs text-white/50">
                Get 10 credits each
              </p>
            </div>
          </div>
        </button>
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <div className="flex items-center gap-3">
            <Zap className={`h-4 w-4 ${isDesigner ? "text-pink-400" : "text-purple-400"}`} />
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                Upgrade to Pro
              </p>
              <p className="text-xs text-white/50">
                Unlock more benefits
              </p>
            </div>
          </div>
        </button>

        {/* Mode toggle button */}
        <button
          onClick={toggleMode}
          className={`flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-white/10 ${
            isDesigner 
              ? "text-pink-400 hover:text-pink-300" 
              : "text-purple-400 hover:text-purple-300"
          }`}
        >
          {isDesigner ? <Code className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
          <span className="flex-1 text-left font-medium">
            {isDesigner ? "Von for Developers" : "Von for Designers"}
          </span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
        
        {/* User and Inbox icons - far left and far right */}
        <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/10">
          {/* User profile button - far left */}
          <div className="relative">
            <button
              ref={userButtonRef}
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsInboxOpen(false);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <User className="h-5 w-5" />
            </button>
            <ProfileDropdown 
              isOpen={isProfileOpen} 
              onClose={() => setIsProfileOpen(false)}
              anchorRef={userButtonRef}
            />
          </div>

          {/* Inbox button - far right */}
          <div className="relative">
            <button
              ref={inboxButtonRef}
              onClick={() => {
                setIsInboxOpen(!isInboxOpen);
                setIsProfileOpen(false);
              }}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors relative"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className={`absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full text-[10px] font-bold flex items-center justify-center ${
                  isDesigner 
                    ? "bg-pink-500 text-white" 
                    : "bg-purple-500 text-white"
                }`}>
                  {unreadCount}
                </span>
              )}
            </button>
            <InboxDropdown 
              isOpen={isInboxOpen} 
              onClose={() => setIsInboxOpen(false)}
              anchorRef={inboxButtonRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
