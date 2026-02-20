import { ArrowRight } from "lucide-react";

const apps = [
  {
    title: "Iconstack",
    subtitle: "21,000+ icons library",
    gradient: "from-indigo-300 to-violet-400 dark:from-indigo-800 dark:to-violet-900",
  },
  {
    title: "ExamAi",
    subtitle: "AI Grading for Schools",
    gradient: "from-emerald-300 to-teal-400 dark:from-emerald-800 dark:to-teal-900",
  },
  {
    title: "Attendflow",
    subtitle: "Event marketing platform",
    gradient: "from-pink-300 to-rose-400 dark:from-pink-800 dark:to-rose-900",
  },
  {
    title: "Business Platform",
    subtitle: "Your Entire Business. One Platform.",
    gradient: "from-slate-300 to-zinc-400 dark:from-slate-700 dark:to-zinc-900",
  },
];

const DiscoverApps = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Discover apps</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Explore what others are building
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map((app) => (
          <div key={app.title} className="group cursor-pointer">
            <div
              className={`mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${app.gradient} transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-center text-sm font-bold text-foreground/50">
                  {app.title}
                </span>
              </div>
            </div>
            <h3 className="text-sm font-medium text-foreground">{app.title}</h3>
            <p className="text-xs text-muted-foreground">{app.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverApps;
