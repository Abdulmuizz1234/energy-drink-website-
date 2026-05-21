'use client';

import Link from 'next/link';

interface FlavorCardProps {
  name: string;
  tagline: string;
  accent: string;
  bg: string;
  emoji: string;
  desc: string;
  href: string;
}

export default function FlavorCard({
  name,
  tagline,
  accent,
  bg,
  emoji,
  desc,
  href,
}: FlavorCardProps) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-2"
      style={{ background: bg }}
    >
      {/* Glow blob */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: accent }}
      />

      <span className="mb-6 text-6xl">{emoji}</span>

      <p
        className="font-syne mb-1 text-xs font-bold uppercase tracking-[0.3em]"
        style={{ color: accent }}
      >
        {tagline}
      </p>

      <h3 className="font-syne mb-4 text-4xl font-black uppercase text-white">
        {name}
      </h3>

      <p className="font-inter text-sm leading-relaxed text-white/60">{desc}</p>

      <div className="mt-8">
        <Link
          href={href}
          className="font-inter inline-block rounded-full px-6 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-80"
          style={{ background: accent }}
        >
          Explore Flavor
        </Link>
      </div>
    </div>
  );
}
