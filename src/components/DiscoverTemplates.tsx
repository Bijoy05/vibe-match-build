import { ArrowRight } from "lucide-react";

const templates = [
  {
    title: "Ecommerce Store Website Template",
    subtitle: "Premium design for webstore",
    gradient: "from-stone-200 to-stone-400 dark:from-stone-700 dark:to-stone-900",
  },
  {
    title: "Architect Portfolio Website Template",
    subtitle: "Firm website & showcase",
    gradient: "from-slate-300 to-slate-500 dark:from-slate-600 dark:to-slate-800",
  },
  {
    title: "Personal blog",
    subtitle: "Muted, intimate design",
    gradient: "from-pink-200 to-purple-300 dark:from-pink-800 dark:to-purple-900",
  },
  {
    title: "Fashion blog",
    subtitle: "Minimal, playful design",
    gradient: "from-violet-200 to-fuchsia-300 dark:from-violet-800 dark:to-fuchsia-900",
  },
  {
    title: "Visual Landing Page Website Template",
    subtitle: "Showcase your company",
    gradient: "from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900",
  },
  {
    title: "Lifestyle Blog",
    subtitle: "Sophisticated blog design",
    gradient: "from-emerald-200 to-teal-300 dark:from-emerald-800 dark:to-teal-900",
  },
  {
    title: "Event Platform Website Template",
    subtitle: "Find, register, create events",
    gradient: "from-cyan-200 to-blue-300 dark:from-cyan-800 dark:to-blue-900",
  },
  {
    title: "Personal portfolio",
    subtitle: "Personal work showcase",
    gradient: "from-rose-200 to-pink-300 dark:from-rose-800 dark:to-pink-900",
  },
];

const DiscoverTemplates = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Discover templates</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Start your next project with a template
          </p>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => (
          <div
            key={template.title}
            className="group cursor-pointer"
          >
            <div
              className={`mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${template.gradient} transition-transform duration-300 group-hover:scale-[1.02]`}
            >
              <div className="flex h-full items-center justify-center p-4">
                <span className="text-center text-xs font-medium uppercase tracking-widest text-foreground/40">
                  {template.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            </div>
            <h3 className="text-sm font-medium text-foreground">{template.title}</h3>
            <p className="text-xs text-muted-foreground">{template.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverTemplates;
