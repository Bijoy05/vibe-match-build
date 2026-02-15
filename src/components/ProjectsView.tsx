import { Star, Clock, FolderOpen, ArrowRight, Layout, Box, Code2 } from "lucide-react";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import { motion } from "motion/react";

interface ProjectsViewProps {
  type: "all" | "starred";
}

// Template categories
const templateCategories = [
  { id: "websites", label: "Websites", icon: Layout },
  { id: "apps", label: "Apps", icon: Box },
  { id: "components", label: "Components", icon: Code2 },
];

const recentProjects = [
  { id: 1, title: "My Portfolio v2", updatedAt: "2 hours ago", gradient: "from-blue-500/70 to-cyan-500/70" },
  { id: 2, title: "Client Dashboard", updatedAt: "Yesterday", gradient: "from-emerald-500/70 to-green-500/70" },
  { id: 3, title: "Startup Landing", updatedAt: "3 days ago", gradient: "from-pink-500/70 to-rose-500/70" },
  { id: 4, title: "E-commerce App", updatedAt: "Last week", gradient: "from-orange-500/70 to-red-500/70" },
];

const starredProjects = [
  { id: 1, title: "My Portfolio v2", updatedAt: "2 hours ago", gradient: "from-blue-500/70 to-cyan-500/70" },
  { id: 2, title: "Client Dashboard", updatedAt: "Yesterday", gradient: "from-emerald-500/70 to-green-500/70" },
  { id: 4, title: "E-commerce App", updatedAt: "Last week", gradient: "from-orange-500/70 to-red-500/70" },
];

const templates = [
  { title: "Ecommerce Store", category: "Websites", gradient: "from-stone-500/60 to-stone-600/60" },
  { title: "Portfolio Site", category: "Websites", gradient: "from-slate-500/60 to-slate-600/60" },
  { title: "Blog Template", category: "Websites", gradient: "from-fuchsia-500/60 to-purple-500/60" },
  { title: "Landing Page", category: "Websites", gradient: "from-indigo-500/60 to-blue-500/60" },
  { title: "Dashboard UI", category: "Apps", gradient: "from-cyan-500/60 to-teal-500/60" },
  { title: "Mobile App", category: "Apps", gradient: "from-emerald-500/60 to-green-500/60" },
  { title: "Button Pack", category: "Components", gradient: "from-violet-500/60 to-fuchsia-500/60" },
  { title: "Form Elements", category: "Components", gradient: "from-rose-500/60 to-pink-500/60" },
];

const ProjectsView = ({ type }: ProjectsViewProps) => {
  const { mode } = useMode();
  const isDesigner = mode === "designer";

  const projects = type === "starred" ? starredProjects : recentProjects;

  return (
    <div className="w-full h-full px-6 py-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <LiquidGlass intensity="high" className="w-full">
          <div className="p-6 md:p-8">
            {/* Recent/Starred Projects Section */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/60" />
                  <h3 className="text-sm font-medium text-white/90">
                    {type === "starred" ? "Starred Projects" : "Recent Projects"}
                  </h3>
                </div>
                <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors">
                  View all <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {projects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} mb-2 flex items-center justify-center transition-all group-hover:shadow-lg`}>
                      <FolderOpen className="h-8 w-8 text-white/40" />
                    </div>
                    <p className="text-sm font-medium text-white/90 truncate">{project.title}</p>
                    <p className="text-xs text-white/40">{project.updatedAt}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Templates Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Category Tabs */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {templateCategories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        cat.id === "websites"
                          ? "bg-white/15 text-white"
                          : "text-white/50 hover:text-white/80 hover:bg-white/8"
                      }`}
                    >
                      <cat.icon className="h-3 w-3" />
                      {cat.label}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors">
                  Browse all <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Templates Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {templates.map((template, i) => (
                  <motion.div
                    key={template.title}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${template.gradient} mb-2 flex items-center justify-center transition-all group-hover:shadow-lg overflow-hidden`}>
                      <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">
                        {template.title.split(" ")[0]}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-white/90 truncate">{template.title}</p>
                    <p className="text-xs text-white/40">{template.category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default ProjectsView;
