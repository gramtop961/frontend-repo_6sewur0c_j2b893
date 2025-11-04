import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const SocialLink = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 hover:text-white"
    aria-label={label}
  >
    <Icon className="h-4 w-4" />
    <span className="hidden sm:inline">{label}</span>
  </a>
);

export default function Hero3D() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(168,85,247,0.18),transparent),radial-gradient(40%_40%_at_20%_10%,rgba(59,130,246,0.15),transparent)]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 md:grid-cols-2 lg:gap-14">
        {/* Copy */}
        <div className="relative z-10 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-fuchsia-400" />
            <span>CS Engineer • Robotics & AI</span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Building futuristic, playful, and intelligent experiences
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            I craft interactive web apps, explore robotics and AI systems, and love shipping ideas end‑to‑end.
            Meet my AI robot companion below and explore my projects, internships, and achievements.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-fuchsia-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <SocialLink href="https://github.com/" Icon={Github} label="GitHub" />
            <SocialLink href="https://linkedin.com/" Icon={Linkedin} label="LinkedIn" />
            <SocialLink href="mailto:hello@example.com" Icon={Mail} label="Email" />
          </div>
        </div>

        {/* 3D Scene */}
        <div className="relative h-[60vh] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl md:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/lUfiWve0vh3E-uKW/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Soft gradient glow, doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 via-cyan-500/5 to-transparent" />
        </div>
      </div>
    </section>
  );
}
