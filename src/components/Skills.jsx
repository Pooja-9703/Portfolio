"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: "🖥️",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/25",
    skills: [
      { name: "HTML5",       level: "Advanced"      },
      { name: "CSS3",        level: "Advanced"      },
      { name: "JavaScript",  level: "Intermediate"  },
    ],
  },
  {
    title: "Frameworks",
    icon: "⚛️",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/25",
    skills: [
      { name: "React",   level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
    ],
  },
  {
    title: "Backend / APIs",
    icon: "⚙️",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/25",
    skills: [
      { name: "REST APIs",      level: "Intermediate" },
      { name: "Node.js",        level: "Learning"     },
      { name: "Nodemailer",     level: "Working"      },
      { name: "Gemini API",     level: "Working"      },
    ],
  },
  {
    title: "Cybersecurity",
    icon: "🔐",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/25",
    skills: [
      { name: "Linux Tools",         level: "Proficient"   },
      { name: "System Monitoring",   level: "Proficient"   },
      { name: "Deadlock Detection",  level: "Advanced"     },
      { name: "File/System Audit",   level: "Proficient"   },
      { name: "Log Analysis",        level: "Intermediate" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/25",
    skills: [
      { name: "Git & GitHub", level: "Advanced"      },
      { name: "Vercel",       level: "Working"       },
      { name: "Bash/Shell",   level: "Intermediate"  },
      { name: "VS Code",      level: "Advanced"      },
    ],
  },
];

const LEVEL_COLOR = {
  "Advanced":     "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Proficient":   "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "Intermediate": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Working":      "bg-green-500/20 text-green-300 border-green-500/30",
  "Learning":     "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Technical Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        My <span className="gradient-text">Toolkit</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {SKILL_CATEGORIES.map(cat => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`glass-card rounded-2xl p-6 border ${cat.border} bg-gradient-to-br ${cat.color} cursor-default`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-bold text-slate-200">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(sk => (
                <div key={sk.name} className="flex items-center gap-1.5">
                  <span className="text-sm text-slate-300">{sk.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${LEVEL_COLOR[sk.level]}`}>
                    {sk.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
