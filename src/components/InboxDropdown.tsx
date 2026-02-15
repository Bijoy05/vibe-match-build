import { useState, useRef, useEffect } from "react";
import { Bell, MessageSquare, UserPlus, Zap, Check, MoreHorizontal } from "lucide-react";
import { useMode } from "./ModeProvider";
import { motion, AnimatePresence } from "motion/react";

interface InboxDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement>;
}

const inboxMessages = [
  {
    id: 1,
    type: "collaboration",
    icon: UserPlus,
    title: "Sarah invited you to collaborate",
    description: "Marketing Website Redesign",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    type: "update",
    icon: Zap,
    title: "Project deployed successfully",
    description: "E-commerce Dashboard is now live",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "message",
    icon: MessageSquare,
    title: "New comment on your project",
    description: "Alex: 'This looks amazing!'",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 4,
    type: "system",
    icon: Bell,
    title: "Weekly summary available",
    description: "You created 3 projects this week",
    time: "Yesterday",
    unread: false,
  },
];

const InboxDropdown = ({ isOpen, onClose, anchorRef }: InboxDropdownProps) => {
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

  const unreadCount = inboxMessages.filter(m => m.unread).length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute bottom-full right-0 mb-2 z-50 w-52"
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

            {/* Header */}
            <div className="relative flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white">Inbox</h3>
                {unreadCount > 0 && (
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    isDesigner 
                      ? "bg-pink-500/20 text-pink-400" 
                      : "bg-purple-500/20 text-purple-400"
                  }`}>
                    {unreadCount} new
                  </span>
                )}
              </div>
              <button className="text-xs text-white/50 hover:text-white transition-colors">
                Mark all as read
              </button>
            </div>

            {/* Messages */}
            <div className="relative max-h-80 overflow-y-auto">
              {inboxMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 p-4 border-b border-white/5 transition-colors hover:bg-white/5 cursor-pointer ${
                    message.unread ? "bg-white/[0.02]" : ""
                  }`}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    message.unread
                      ? isDesigner 
                        ? "bg-pink-500/20 text-pink-400" 
                        : "bg-purple-500/20 text-purple-400"
                      : "bg-white/10 text-white/50"
                  }`}>
                    <message.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className={`text-sm truncate ${message.unread ? "font-medium text-white" : "text-white/70"}`}>
                        {message.title}
                      </p>
                      {message.unread && (
                        <div className={`h-2 w-2 shrink-0 rounded-full mt-1.5 ${
                          isDesigner ? "bg-pink-500" : "bg-purple-500"
                        }`} />
                      )}
                    </div>
                    <p className="text-xs text-white/50 truncate mt-0.5">{message.description}</p>
                    <p className="text-[10px] text-white/30 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="relative p-3 border-t border-white/10">
              <button className={`w-full rounded-lg py-2 text-sm font-medium transition-colors ${
                isDesigner 
                  ? "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20" 
                  : "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
              }`}>
                View all notifications
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InboxDropdown;
