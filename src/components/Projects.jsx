"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "lockx",
    featured: true,
    title: "LockX – Automated Deadlock Detection",
    description:
      "A real-time system monitoring tool that detects OS-level deadlocks using wait-for graph cycle detection (DFS). Provides live process tracking, visual graph output, and instant alerts when deadlock conditions are found.",
    tech: ["Python", "Bash", "Graph Theory", "OS Internals", "DFS Algorithm"],
    github: "https://github.com/",
    demo: null,
    icon: "🔒",
    gradient: "from-red-500/20 via-orange-500/10 to-transparent",
    border: "border-red-500/30",
    glow: "shadow-red-500/10",
  },
  {
    id: "flashcard",
    featured: false,
    title: "AI-Personalized Flashcard Creator",
    description:
      "An AI-powered chatbot that generates personalized study flashcards from any topic. Integrates the Gemini API to create concise, structured flashcards on-demand — ideal for students and self-learners.",
    tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
    github: "https://github.com/",
    demo: "#",
    icon: "🤖",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/10",
  },
  {
    id: "food",
    featured: false,
    title: "Food Delivery Website",
    description:
      "A responsive food delivery UI featuring a multi-page ordering system, interactive menu, cart management, and order confirmation flow. Clean, modern UI designed for mobile-first experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
    icon: "🍕",
    gradient: "from-yellow-500/20 via-orange-400/10 to-transparent",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/10",
  },
];

const LINUX_TOOLS = [
  { name: "Large File Finder",      desc: "Scans filesystem for large files beyond threshold",    icon: "📁" },
  { name: "Username Extractor",     desc: "Extracts and lists system usernames from /etc/passwd", icon: "👤" },
  { name: "Boot History Summary",   desc: "Summarises system boot & shutdown history via journalctl", icon: "🔄" },
  { name: "Group Membership Audit", desc: "Audits user group memberships for privilege review",   icon: "🔑" },
  { name: "File Permission Auditor",desc: "Finds SUID/SGID files and world-writable paths",       icon: "🛡️" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const card = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Things I&apos;ve <span className="gradient-text">Built</span>
      </motion.h2>

      {/* Main Project Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6 mb-16"
      >
        {PROJECTS.map(project => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={`relative glass-card rounded-2xl p-6 sm:p-8 border ${project.border}
              bg-gradient-to-br ${project.gradient}
              hover:shadow-2xl ${project.glow} transition-all duration-300`}
          >
            {/* Featured badge */}
            {project.featured && (
              <span className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3 py-1 text-xs font-bold
                rounded-full bg-red-500/20 text-red-300 border border-red-500/40 uppercase tracking-widest">
                ⭐ Featured
              </span>
            )}

            <div className="flex items-start gap-4">
              <div className="text-3xl mt-1 flex-shrink-0">{project.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-mono rounded-md
                      bg-slate-800/60 text-slate-300 border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2 px-4 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Linux Tools Collection */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-2xl">🐧</span>
          <div>
            <h3 className="text-xl font-bold text-slate-100">Linux Tools Collection</h3>
            <p className="text-sm text-slate-400">A suite of system administration and security audit scripts</p>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto btn-secondary py-2 px-4 text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LINUX_TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-4 border border-green-500/15 bg-gradient-to-br from-green-500/10 to-transparent cursor-default"
            >
              <span className="text-xl">{tool.icon}</span>
              <h4 className="font-semibold text-slate-200 mt-2 mb-1">{tool.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
              <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-green-500/15 text-green-400 font-mono">
                bash script
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
