import { Plus, Mic, ArrowUp } from "lucide-react";

const ChatInput = ({ className }: { className?: string }) => {
  return (
    <div className={className || "w-full max-w-3xl"}>
      <div className="rounded-2xl border border-border/40 bg-card/80 shadow-2xl backdrop-blur-xl dark:bg-[hsl(0,0%,16%)]/90 h-[121px]">
        {/* Text area */}
        <div className="px-4 pt-4 pb-2">
          <textarea
            placeholder="Ask Von to create"
            rows={2}
            className="w-full resize-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-t border-border/30 px-3 py-2">
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              <Plus className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-blue-700">
              Plan
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              <Mic className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background transition-colors hover:bg-foreground/80">
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
