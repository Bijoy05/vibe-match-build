import { LiquidBackground } from "@/components/LiquidBackground";
import { useMode } from "@/components/ModeProvider";
import ChatInput from "@/components/ChatInput";
import DashboardSidebar from "@/components/DashboardSidebar";
import LibrarySection from "@/components/LibrarySection";
import ProjectsView from "@/components/ProjectsView";
import { motion } from "motion/react";
import { useRef, useState } from "react";

type DashboardView = "home" | "all-projects" | "starred";

const Dashboard = () => {
  const { mode } = useMode();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentView, setCurrentView] = useState<DashboardView>("home");

  const isDesigner = mode === "designer";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      {/* Sidebar */}
      <DashboardSidebar 
        currentView={currentView}
        onNavigate={setCurrentView}
      />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Main chat area with rounded section */}
        <div 
          ref={scrollContainerRef}
          className="relative flex-1 overflow-y-auto overflow-x-hidden rounded-2xl m-2"
        >
          {/* Fixed Liquid Background within the container */}
          <div className="sticky top-0 left-0 right-0 h-0 z-0">
            <div className="absolute inset-0 h-screen rounded-2xl overflow-hidden">
              <LiquidBackground className="rounded-2xl" />
            </div>
          </div>

          {/* Home View - Chat area */}
          {currentView === "home" && (
            <>
              {/* Hero section - first viewport */}
              <section className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-20">
                <div className="flex max-w-3xl flex-col items-center text-center">
                  {/* Heading */}
                  <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    What's on your mind?
                  </h1>

                  {/* Subtitle - same for both modes */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 max-w-lg text-lg text-white/70"
                  >
                    Use Von to ship your next idea faster!
                  </motion.p>

                  {/* Chat Input - expands downward */}
                  <div className="w-[638px]">
                    <ChatInput className="w-full" />
                  </div>
                </div>
              </section>

              {/* Library Section - Visible on scroll */}
              <section className="relative z-10 pb-12 pt-8">
                <LibrarySection showRecentProjects={true} />
              </section>
            </>
          )}

          {/* All Projects View */}
          {currentView === "all-projects" && (
            <section className="relative z-10 min-h-full flex items-start justify-center pt-8">
              <ProjectsView type="all" />
            </section>
          )}

          {/* Starred Projects View */}
          {currentView === "starred" && (
            <section className="relative z-10 min-h-full flex items-start justify-center pt-8">
              <ProjectsView type="starred" />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
