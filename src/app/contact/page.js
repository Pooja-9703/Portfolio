"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONTACTS = [
  {
    label: "Email",
    value: "your@email.com",
    href:  "mailto:your@email.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    color: "border-blue-500/25 from-blue-500/10",
  },
  {
    label: "GitHub",
    value: "github.com/yourhandle",
    href:  "https://github.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    color: "border-purple-500/25 from-purple-500/10",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href:  "https://linkedin.com/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "border-cyan-500/25 from-cyan-500/10",
  },
];

function InputField({ id, label, type = "text", value, onChange, required, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-300">
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200
          placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60
          focus:ring-1 focus:ring-blue-500/30 transition-all"
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("idle"); // idle | loading | success | error

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Back to portfolio
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="section-label mb-3">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Have a project in mind, a question, or just want to say hello?
              I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form – wider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                    <p className="text-slate-400 mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="btn-secondary py-2 px-6"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <InputField
                      id="name"
                      label="Your Name"
                      value={form.name}
                      onChange={set("name")}
                      required
                      placeholder="Pooja Sindhu"
                    />
                    <InputField
                      id="email"
                      label="Email Address"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      required
                      placeholder="hello@example.com"
                    />
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        Message <span className="text-blue-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell me about your project or inquiry…"
                        className="bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-slate-200
                          placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/60
                          focus:ring-1 focus:ring-blue-500/30 transition-all resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400">
                        ⚠️ Something went wrong. Please try again or email me directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar: contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="lg:col-span-2 space-y-4"
            >
              {CONTACTS.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 glass-card rounded-xl p-5 border ${c.color}
                    bg-gradient-to-br to-transparent hover:scale-[1.02] transition-transform group`}
                >
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-blue-400 group-hover:text-blue-300 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium mb-0.5">{c.label}</p>
                    <p className="text-sm text-slate-300 group-hover:text-blue-400 transition-colors break-all">{c.value}</p>
                  </div>
                </a>
              ))}

              {/* Availability card */}
              <div className="glass-card rounded-xl p-5 border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-widest">Available</p>
                </div>
                <p className="text-sm text-slate-400">
                  Currently open to internship opportunities and collaborative projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
