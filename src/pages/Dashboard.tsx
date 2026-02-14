import { Particles } from "@/components/Particles";
import { useTheme } from "@/components/ThemeProvider";
import ChatInput from "@/components/ChatInput";
import DashboardSidebar from "@/components/DashboardSidebar";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen w-full overflow-hidden dark:bg-[hsl(0,0%,16%)]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Main chat area with rounded section */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl m-2 dark:bg-[hsl(0,0%,0%)]">
          <Particles
            className="absolute inset-0"
            quantity={140}
            staticity={40}
            ease={40}
            size={theme === "dark" ? 0.5 : 0.6}
            color={theme === "dark" ? "#ffffff" : "#000000"}
            vx={0.08}
            vy={0.04}
          />

          <div className="relative z-10 flex max-w-3xl flex-col items-center text-center px-6">
            {/* Announcement pill */}
            <button className="mb-6 flex items-center gap-2 rounded-full border border-border/60 bg-accent/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent">
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
                New
              </span>
              <span>Introducing a smarter Von</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>

            {/* Heading */}
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What's on your mind?
            </h1>

            {/* Chat Input */}
            <ChatInput className="w-[638px]" />
          </div>

          {/* Bottom tabs */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="flex items-center gap-1">
                {["Recently viewed", "My projects", "Shared with me", "Templates"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`rounded-full px-4 py-2 text-sm transition-colors ${
                      i === 0
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                Browse all <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
