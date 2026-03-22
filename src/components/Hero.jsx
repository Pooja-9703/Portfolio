"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ROLES = [
  "Cybersecurity & Systems Developer",
  "Full-Stack Web Developer",
  "Linux & System Tool Builder",
];

function TypeWriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 45 : 90;

    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setDeleting(false);
          setRoleIdx(i => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono">
      <span className="gradient-text">{text}</span>
      <span className="cursor">▌</span>
    </span>
  );
}

/* Floating shape helper */
function Shape({ className }) {
  return <div className={className} />;
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Floating decorative shapes */}
      <div className="absolute top-32 right-12 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-24 left-8 w-48 h-48 rounded-full bg-purple-500/5 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: Text ──────────────────────────────────────── */}
        <div>
          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-xs font-medium text-blue-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            Open to internships &amp; opportunities
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="section-label mb-3">Welcome to my portfolio</p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-4">
              Hello, I&apos;m{" "}
              <span className="gradient-text-blue text-glow">
                Pooja Dheeraj Sindhu
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 mb-6 min-h-[2rem]">
              <TypeWriter />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Cybersecurity &amp; Full-Stack Developer building{" "}
            <span className="text-blue-400">intelligent and secure systems</span>.
            I blend system-level thinking with modern web development
            to create tools that are both powerful and reliable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button onClick={scrollToProjects} className="btn-primary">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              View Projects
            </button>
            <a
              href="https://resumepoojadheeraj.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-3 text-slate-500 text-sm"
          >
            <div className="flex flex-col gap-1 items-center">
              <div className="w-px h-8 bg-gradient-to-b from-transparent to-blue-400/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
            </div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>

        {/* ── RIGHT: Profile Card ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full bg-blue-500/15 blur-3xl animate-pulse-glow" />
          </div>

          {/* Card */}
          <div className="relative glass-card rounded-2xl p-6 w-72 sm:w-80">
            {/* Scan line effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-scan" />
            </div>

            {/* Avatar */}
            <div className="relative mx-auto w-40 h-40 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-0.5">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Pooja Dheeraj Sindhu"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>
              </div>
              {/* Online dot */}
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
            </div>

            {/* Name */}
            <div className="text-center mb-4">
              <h2 className="font-bold text-lg text-slate-100">Pooja Dheeraj Sindhu</h2>
              <p className="text-sm text-blue-400 font-mono mt-0.5">Cybersecurity &bull; Full-Stack</p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/8">
              {[
                { n: "4+", label: "Projects" },
                { n: "10+", label: "Linux Tools" },
              ].map(({ n, label }) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold text-blue-400">{n}</p>
                  <p className="text-xs text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating shapes */}
          <div className="absolute -top-6 -right-6 w-16 h-16 border border-blue-500/30 rounded-lg rotate-12 animate-float pointer-events-none" />
          <div className="absolute -bottom-8 -left-4 w-10 h-10 border border-purple-500/30 rounded-full animate-float-delayed pointer-events-none" />
          <div className="absolute top-1/2 -left-10 w-6 h-6 bg-cyan-400/20 rounded rotate-45 animate-float pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
