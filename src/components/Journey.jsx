"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    title: "Lovely Professional University",
    subtitle: "B.Tech in Computer Science and Engineering",
    desc: "Pursuing B.Tech with focus on System Architecture and Cybersecurity.",
    year: "2023 – 2027",
    side: "left",
  },
  {
    title: "GVHSS Payyoli",
    subtitle: "Higher Secondary Education",
    desc: "Completed higher secondary education specializing in Computer Science.",
    year: "2020 – 2022",
    side: "right",
  },
  {
    title: "United Public School",
    subtitle: "Secondary Education",
    desc: "Completed high school education.",
    year: "2019 – 2020",
    side: "left",
  },
];

export default function Journey() {
  return (<section className="py-20 lg:py-28"> <div className="max-w-5xl mx-auto px-6">
    {/* Heading */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="section-label mb-3"
    >
      My Journey
    </motion.p>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 }}
      className="text-3xl sm:text-4xl font-bold mb-16"
    >
      The <span className="gradient-text">Timeline</span>
    </motion.h2>

    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-green-500/40 hidden md:block -translate-x-px" />

      <div className="space-y-14">
        {MILESTONES.map((m, i) => {
          const isLeft = m.side === "left";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Card */}
              <div className={`flex-1 ${isLeft ? "md:pr-10" : "md:pl-10"}`}>
                <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-[1.02] border-l-2 border-l-green-400/50 md:border-l-white/10">

                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-slate-100 text-lg">
                      {m.title}
                    </h3>

                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                      {m.year}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-slate-300 mb-2">
                    {m.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <div className="relative w-5 h-5">
                  <div className="absolute inset-0 rounded-full bg-green-400/20 animate-ping-slow" />
                  <div className="relative w-5 h-5 rounded-full bg-green-400 border-4 border-[#020617]" />
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  </div>
  </section>

  );
}
