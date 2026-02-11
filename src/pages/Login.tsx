import { Particles } from "@/components/Particles";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

const carouselImages = [
  { bg: "from-sky-400 to-sky-300", label: "Visual Electric" },
  { bg: "from-gray-200 to-gray-300", label: "Fashion Portfolio" },
  { bg: "from-purple-500 to-indigo-600", label: "Algo Studio" },
  { bg: "from-pink-400 to-rose-500", label: "Creative Agency" },
  { bg: "from-amber-400 to-yellow-500", label: "Bonded" },
  { bg: "from-slate-700 to-slate-800", label: "AI Assistant" },
  { bg: "from-orange-500 to-red-500", label: "Haptic" },
  { bg: "from-emerald-600 to-green-500", label: "Dashboard" },
  { bg: "from-violet-500 to-purple-600", label: "Analytics" },
  { bg: "from-cyan-400 to-teal-500", label: "SaaS Platform" },
];

const CarouselColumn = ({ items, direction }: { items: typeof carouselImages; direction: "up" | "down" }) => (
  <div className="flex flex-col gap-3 overflow-hidden h-full">
    <div
      className={`flex flex-col gap-3 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
    >
      {[...items, ...items, ...items].map((item, i) => (
        <div
          key={i}
          className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${item.bg} flex items-end p-3 shrink-0`}
        >
          <span className="text-xs font-medium text-white/80 drop-shadow-sm">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Login = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      navigate("/dashboard");
    }
  };

  const col1 = carouselImages.slice(0, 5);
  const col2 = carouselImages.slice(5, 10);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left side - Login form */}
      <div className="relative flex w-full flex-col items-center justify-center lg:w-1/2">
        <Particles
          className="absolute inset-0"
          quantity={120}
          staticity={40}
          ease={40}
          size={theme === "dark" ? 0.5 : 0.6}
          color={theme === "dark" ? "#ffffff" : "#000000"}
          vx={0.08}
          vy={0.04}
        />

        <div className="relative z-10 flex w-full max-w-md flex-col items-center px-8">
          {/* Logo */}
          <Zap className="mb-8 h-10 w-10 fill-current text-foreground" />

          {/* Heading */}
          <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome to Von</h1>
          <p className="mb-10 text-lg text-muted-foreground">Start building now.</p>

          {/* Google button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6 flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Email form */}
          <form onSubmit={handleContinue} className="w-full space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-muted px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Continue
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Carousel */}
      <div className="hidden h-screen w-1/2 overflow-hidden bg-background p-3 lg:block">
        <div className="grid h-full grid-cols-2 gap-3 overflow-hidden rounded-2xl">
          <CarouselColumn items={col1} direction="up" />
          <CarouselColumn items={col2} direction="down" />
        </div>
      </div>
    </div>
  );
};

export default Login;
