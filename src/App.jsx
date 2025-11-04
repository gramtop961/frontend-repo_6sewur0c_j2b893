import React from 'react';
import Hero3D from './components/Hero3D';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import AchievementsGoals from './components/AchievementsGoals';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">CS Portfolio</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#highlights" className="hover:text-white">Highlights</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero3D />
      <ProjectsGrid />
      <ExperienceTimeline />
      <AchievementsGoals />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
          <p>
            Designed with care • Built with React, Tailwind, and Spline. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
