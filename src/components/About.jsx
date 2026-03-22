"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "4+",  label: "Major Projects" },
  { value: "10+", label: "Linux Tools Built" },
  { value: "2+",  label: "Years of Learning" },
  { value: "100%", label: "Passion for Security" },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-label mb-3"
      >
        About Me
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Curious developer with a{" "}
        <span className="gradient-text">security mindset</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5 text-slate-400 text-[0.95rem] leading-relaxed"
        >
          <p>
            I&apos;m <span className="text-slate-200 font-semibold">Pooja Dheeraj Sindhu</span>, a
            developer at the intersection of <span className="text-blue-400">cybersecurity</span> and{" "}
            <span className="text-blue-400">full-stack development</span>. My journey started
            with curiosity — building simple HTML pages and wondering how things work beneath
            the surface.
          </p>
          <p>
            That curiosity led me deeper into <span className="text-slate-300">Linux ecosystems</span>,
            system-level programming, and security tooling. I became fascinated by how
            operating systems manage resources, how processes can deadlock, and how subtle
            vulnerabilities can be detected before they cause harm.
          </p>
          <p>
            Today I build tools that solve real engineering problems — from an{" "}
            <span className="text-slate-300">AI-powered flashcard creator</span> to{" "}
            <span className="text-cyan-400 font-semibold">LockX</span>, a real-time automated
            deadlock detection system using wait-for graph cycle detection.
          </p>
          <p>
            I&apos;m passionate about clean software design, system auditing, and building
            applications that are both <span className="text-purple-400">intelligent</span> and{" "}
            <span className="text-blue-400">secure</span>.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {["Linux", "System Monitoring", "React / Next.js", "Deadlock Detection", "File Auditing", "Open Source"].map(tag => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full glass border border-white/10 text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Stats + Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          <div className="glass-card rounded-2xl p-6">
            <p className="text-xs font-mono text-blue-400 mb-4">$ whoami --profile</p>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass rounded-xl p-4 border border-white/5">
                  <p className="text-2xl font-bold gradient-text-blue">{value}</p>
                  <p className="text-xs text-slate-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terminal-style card */}
          <div className="glass-card rounded-2xl p-5 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 text-xs text-slate-500">terminal</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <p><span className="text-green-400">→</span> <span className="text-blue-400">focus:</span> <span className="text-slate-300">Cybersecurity + Web Dev</span></p>
              <p><span className="text-green-400">→</span> <span className="text-blue-400">os:</span> <span className="text-slate-300">Linux / Windows</span></p>
              <p><span className="text-green-400">→</span> <span className="text-blue-400">tools:</span> <span className="text-slate-300">Git, React, Next.js, Bash</span></p>
              <p><span className="text-green-400">→</span> <span className="text-blue-400">learning:</span> <span className="text-slate-300">Advanced Security + Full-Stack</span></p>
              <p><span className="text-green-400">→</span> <span className="text-blue-400">status:</span> <span className="text-green-400">Open to opportunities ✓</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
