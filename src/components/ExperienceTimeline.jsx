import React from 'react';
import { Briefcase } from 'lucide-react';

const items = [
  {
    type: 'Internship',
    org: 'TechNova Labs',
    role: 'Software Engineering Intern',
    period: 'May 2024 – Aug 2024',
    detail:
      'Built internal dashboards, shipped a feature flag system, and improved API performance by 30%.',
  },
  {
    type: 'Role',
    org: 'University Dev Club',
    role: 'Core Team • Web Lead',
    period: '2023 – Present',
    detail:
      'Mentored 25+ juniors, organized hack nights, and led 3 open-source initiatives adopted by campus.',
  },
  {
    type: 'Internship',
    org: 'CloudCraft',
    role: 'Backend Intern',
    period: 'Jan 2024 – Apr 2024',
    detail:
      'Designed asynchronous task workers and added observability with metrics and tracing.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-cyan-400" />
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400">Roles & Internships</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">Experience</h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-500/40 via-white/10 to-transparent sm:left-1/2" />
          <ol className="space-y-10">
            {items.map((it, i) => (
              <li key={i} className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2">
                <div className={`order-2 sm:order-${i % 2 === 0 ? '1' : '2'} sm:pr-8`}>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-xl">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-cyan-400">{it.type}</span>
                      <span className="text-xs text-white/60">{it.period}</span>
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-white">{it.role}</h3>
                    <p className="text-sm text-white/70">{it.org}</p>
                    <p className="mt-3 text-sm text-white/70">{it.detail}</p>
                  </div>
                </div>
                <div className={`order-1 sm:order-${i % 2 === 0 ? '2' : '1'} sm:pl-8`}>
                  <div className="h-3 w-3 translate-x-[10px] rounded-full bg-cyan-400 shadow-[0_0_30px] shadow-cyan-500/40 sm:translate-x-[-7px]" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
