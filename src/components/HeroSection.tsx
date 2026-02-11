import { Particles } from "./Particles";
import { useTheme } from "./ThemeProvider";
import ChatInput from "./ChatInput";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <Particles
        className="absolute inset-0"
        quantity={180}
        staticity={40}
        ease={40}
        size={theme === "dark" ? 0.5 : 0.6}
        color={theme === "dark" ? "#ffffff" : "#000000"}
        vx={0.08}
        vy={0.04}
      />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        <button className="mb-8 flex items-center gap-2 rounded-full border border-border/60 bg-accent/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:bg-accent">
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">
            New
          </span>
          <span>Introducing a smarter Von</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Build something{" "}
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Von
          </span>
        </h1>

        <p className="mb-10 max-w-lg text-lg text-muted-foreground">
          Create apps and websites by chatting with AI
        </p>

        <ChatInput />
      </div>
    </section>
  );
};

export default HeroSection;
