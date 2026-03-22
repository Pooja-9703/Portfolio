import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Pooja Dheeraj Sindhu | Cybersecurity & Full-Stack Developer",
  description:
    "Personal portfolio of Pooja Dheeraj Sindhu — Cybersecurity & Full-Stack Developer building intelligent, secure systems. Explore projects, skills, and journey.",
  keywords: ["cybersecurity", "full-stack developer", "portfolio", "LockX", "Next.js", "React"],
  authors: [{ name: "Pooja Dheeraj Sindhu" }],
  openGraph: {
    title: "Pooja Dheeraj Sindhu | Cybersecurity & Full-Stack Developer",
    description: "Building intelligent and secure systems. Explore my portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
