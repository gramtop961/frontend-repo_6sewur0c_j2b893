import React from 'react';
import { Rocket, Star } from 'lucide-react';

const achievements = [
  'Winner • Hack the Future 2024 (300+ participants)',
  'Top 1% • Google Code Jam Qualifier',
  'Published • "Interactive Systems" in UG Tech Journal',
  'Speaker • University Dev Summit on Web Performance',
];

const goals = [
  { label: 'Master Systems Design', progress: 70 },
  { label: 'Contribute to OSS Monthly', progress: 60 },
  { label: 'Publish a Research Preprint', progress: 40 },
  { label: 'Ship a SaaS MVP', progress: 55 },
];

export default function AchievementsGoals() {
  return (
    <section id="highlights" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Star className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-xs uppercase tracking-widest text-yellow-400">Proud Moments</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">Achievements</h2>
              </div>
            </div>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-300" />
                  <p className="text-sm text-white/80">{a}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3">
              <Rocket className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="text-xs uppercase tracking-widest text-cyan-400">What I'm Building Toward</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">Goals</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {goals.map((g, i) => (
                <li key={i}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-white/80">{g.label}</span>
                    <span className="text-white/60">{g.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
                      style={{ width: `${g.progress}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div id="contact" className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white/80">
          <h3 className="text-lg font-semibold text-white">Say hello</h3>
          <p className="mt-1 text-sm">Available for internships and freelance: let’s build something delightful.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              Email Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
