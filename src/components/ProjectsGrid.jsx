import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collaborator',
    description: 'CRDT-powered editor with WebRTC signaling, presence, and latency compensation.',
    tags: ['React', 'CRDT', 'WebRTC', 'Tailwind'],
    repo: '#',
    live: '#',
  },
  {
    title: 'System Monitor',
    description: 'Cross-platform desktop tool that visualizes processes, IO, and GPU metrics in 3D.',
    tags: ['Rust', 'Tauri', 'Three.js'],
    repo: '#',
    live: '#',
  },
  {
    title: 'AI Study Buddy',
    description: 'Context-aware Q&A with spaced repetition and voice, built for exam prep.',
    tags: ['FastAPI', 'RAG', 'Pinecone', 'OpenAI'],
    repo: '#',
    live: '#',
  },
  {
    title: 'Campus Navigator',
    description: 'AR-enabled map with shortest paths, live occupancy, and event beacons.',
    tags: ['Next.js', 'Mapbox', 'AR'],
    repo: '#',
    live: '#',
  },
  {
    title: 'Algo Visualizer',
    description: 'Interactive visualizations for graph, DP, and greedy algorithms with playgrounds.',
    tags: ['TypeScript', 'D3', 'Vite'],
    repo: '#',
    live: '#',
  },
  {
    title: 'Dev Portfolio v3',
    description: 'This website: modern, interactive, fast, with 3D hero and delightful details.',
    tags: ['React', 'Spline', 'Tailwind'],
    repo: '#',
    live: '#',
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70">
    {children}
  </span>
);

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-cyan-400">Featured Work</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
          </div>
          <div className="hidden items-center gap-2 text-sm text-white/70 sm:flex">
            <Star className="h-4 w-4 text-yellow-400" />
            <span>Hand‑picked highlights</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 shadow-xl transition hover:translate-y-[-2px] hover:shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <div className="flex items-center gap-2 opacity-80">
                  <a
                    href={p.repo}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
                    aria-label="GitHub Repository"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={p.live}
                    className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="mt-3 line-clamp-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <Tag key={idx}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
