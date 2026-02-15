import { useState, useRef, useEffect } from "react";
import { 
  User, 
  Gift, 
  Settings, 
  Sun, 
  HelpCircle, 
  FileText, 
  Users, 
  Home,
  LogOut,
  ChevronRight,
  Command
} from "lucide-react";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import { motion, AnimatePresence } from "motion/react";

interface ProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement>;
}

const ProfileDropdown = ({ isOpen, onClose, anchorRef }: ProfileDropdownProps) => {
  const { mode } = useMode();
  const isDesigner = mode === "designer";
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose, anchorRef]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const menuItems = [
    { icon: User, label: "Profile", hasArrow: false },
    { icon: Gift, label: "Bonuses", badge: "New", hasArrow: false },
    { icon: Settings, label: "Settings", shortcut: "⌘,", hasArrow: false },
    { icon: Sun, label: "Appearance", hasArrow: true },
    { icon: HelpCircle, label: "Support", hasArrow: true },
    { icon: FileText, label: "Documentation", hasArrow: true },
    { icon: Users, label: "Community", hasArrow: false },
    { icon: Home, label: "Homepage", hasArrow: false },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute bottom-full left-0 mb-2 z-50 w-52"
        >
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a]/95 border border-white/10 backdrop-blur-2xl shadow-[0_16px_64px_rgba(0,0,0,0.5)]">
            {/* Noise texture */}
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '128px 128px',
              }}
            />

            {/* User info header */}
            <div className="relative p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${
                  isDesigner 
                    ? "bg-gradient-to-br from-pink-500 to-orange-500" 
                    : "bg-gradient-to-br from-purple-600 to-blue-600"
                }`}>
                  BS
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Bijoy Sen</p>
                  <p className="text-xs text-white/50">bijoysen159@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className="relative p-2">
              {menuItems.map((item, index) => (
                <button
                  key={item.label}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-white/50" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                        isDesigner 
                          ? "bg-pink-500/20 text-pink-400" 
                          : "bg-purple-500/20 text-purple-400"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.shortcut && (
                    <span className="text-xs text-white/30">{item.shortcut}</span>
                  )}
                  {item.hasArrow && (
                    <ChevronRight className="h-3.5 w-3.5 text-white/30" />
                  )}
                </button>
              ))}
            </div>

            {/* Sign out */}
            <div className="relative border-t border-white/10 p-2">
              <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white">
                <LogOut className="h-4 w-4 text-white/50" />
                <span>Sign out</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;
