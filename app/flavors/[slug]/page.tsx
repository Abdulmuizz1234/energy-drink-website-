import { notFound } from 'next/navigation';
import Link from 'next/link';

const flavors: Record<string, {
  name: string;
  tagline: string;
  emoji: string;
  accent: string;
  bg: string;
  headline: string;
  description: string;
  benefits: { icon: string; title: string; body: string }[];
  ingredients: string[];
  stats: { val: string; label: string }[];
}> = {
  coconut: {
    name: 'Coconut',
    tagline: 'Tropical Clarity',
    emoji: '🥥',
    accent: '#39ff14',
    bg: 'linear-gradient(135deg, #0d1f0d 0%, #111811 100%)',
    headline: 'Smooth Tropics. Pure Focus.',
    description:
      'Volt Coconut is the clean-energy formula disguised as paradise. A smooth, crisp rush of tropical coconut with a finish so clean you\'ll forget it\'s fuel. Zero crash. Maximum focus. Built for those who want performance without compromise.',
    benefits: [
      { icon: '🥥', title: 'Tropical Smoothness', body: 'Natural coconut profile with a light, refreshing finish.' },
      { icon: '🧠', title: 'Mental Clarity', body: '200mg caffeine + L-theanine for clean, sustained focus.' },
      { icon: '⚡', title: 'Instant Energy', body: 'Fast-absorbing formula gets you going in minutes.' },
      { icon: '🚫', title: 'Zero Sugar', body: 'Full flavour. Zero sugar. No crash. No excuses.' },
    ],
    ingredients: [
      'Carbonated Water',
      'Natural Coconut Flavour',
      'Coconut Water Extract',
      'Caffeine (200mg)',
      'Taurine (1000mg)',
      'L-Theanine (100mg)',
      'Vitamin B3 (Niacin)',
      'Vitamin B6',
      'Vitamin B12',
      'Citric Acid',
      'Sucralose',
      'Potassium Citrate',
    ],
    stats: [
      { val: '0g', label: 'Sugar' },
      { val: '200mg', label: 'Caffeine' },
      { val: '10kcal', label: 'Per Can' },
    ],
  },
  orange: {
    name: 'Orange',
    tagline: 'Solar Surge',
    emoji: '🍊',
    accent: '#ff6b00',
    bg: 'linear-gradient(135deg, #1f0e00 0%, #180d00 100%)',
    headline: 'Citrus Ignition. All Day Power.',
    description:
      'Volt Orange ignites your senses with a bright Valencia citrus burst that powers through your day. Bold, warming, and relentless — this is the flavour for those who start fast and finish strong.',
    benefits: [
      { icon: '🍊', title: 'Bold Citrus Burst', body: 'Bright Valencia orange with a warm, lingering finish.' },
      { icon: '🔥', title: 'High Energy Output', body: 'Engineered for peak performance in demanding situations.' },
      { icon: '💪', title: 'Sustained Drive', body: 'Taurine + caffeine stack keeps output consistent for hours.' },
      { icon: '🚫', title: 'Zero Sugar', body: 'Full flavour. Zero sugar. No crash. No excuses.' },
    ],
    ingredients: [
      'Carbonated Water',
      'Natural Orange Flavour',
      'Valencia Orange Extract',
      'Caffeine (200mg)',
      'Taurine (1000mg)',
      'L-Theanine (100mg)',
      'Vitamin B3 (Niacin)',
      'Vitamin B6',
      'Vitamin B12',
      'Citric Acid',
      'Sucralose',
      'Potassium Citrate',
    ],
    stats: [
      { val: '0g', label: 'Sugar' },
      { val: '200mg', label: 'Caffeine' },
      { val: '10kcal', label: 'Per Can' },
    ],
  },
  lime: {
    name: 'Lime',
    tagline: 'Icy Voltage',
    emoji: '🍋',
    accent: '#ccff00',
    bg: 'linear-gradient(135deg, #0f1a00 0%, #0c1400 100%)',
    headline: 'Cold Zest. Pure Power.',
    description:
      'Volt Lime is engineered for those who want an edge. The sharp, ice-cold profile of fresh Persian lime is dialled up with a precise caffeine and amino acid formula that delivers instant clarity and sustained output. The most assertive flavour in the Volt range.',
    benefits: [
      { icon: '❄️', title: 'Icy Sharpness', body: 'Crisp lime profile with a cooling finish that hits instantly.' },
      { icon: '⚡', title: 'Fast Activation', body: '200mg caffeine + taurine — engineered for rapid uptake.' },
      { icon: '🎯', title: 'Laser Focus', body: 'L-theanine smooths the caffeine curve for hours of clean focus.' },
      { icon: '🚫', title: 'Zero Sugar', body: 'Maximum intensity. Zero sugar. No crash. No excuses.' },
    ],
    ingredients: [
      'Carbonated Water',
      'Natural Lime Flavour',
      'Persian Lime Extract',
      'Caffeine (200mg)',
      'Taurine (1000mg)',
      'L-Theanine (100mg)',
      'Vitamin B3 (Niacin)',
      'Vitamin B6',
      'Vitamin B12',
      'Citric Acid',
      'Sucralose',
      'Potassium Citrate',
    ],
    stats: [
      { val: '0g', label: 'Sugar' },
      { val: '200mg', label: 'Caffeine' },
      { val: '10kcal', label: 'Per Can' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(flavors).map((slug) => ({ slug }));
}

export default async function FlavorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const flavor = flavors[slug];
  if (!flavor) notFound();

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Back nav */}
      <div className="px-6 pt-8 md:px-16">
        <Link
          href="/"
          className="font-inter inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 py-24 md:px-16 md:py-40"
        style={{ background: flavor.bg }}
      >
        <div
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
          style={{ background: flavor.accent }}
        />
        <div className="relative mx-auto max-w-6xl">
          <p
            className="font-syne mb-4 text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: flavor.accent }}
          >
            {flavor.tagline}
          </p>
          <div className="mb-6 text-8xl md:text-9xl">{flavor.emoji}</div>
          <h1 className="font-syne mb-6 text-7xl font-black uppercase leading-none text-white md:text-9xl">
            {flavor.name}
          </h1>
          <p className="font-inter max-w-xl text-lg leading-relaxed text-white/60">
            {flavor.description}
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="font-inter inline-block rounded-full px-8 py-3 font-semibold text-black transition-opacity hover:opacity-80"
              style={{ background: flavor.accent }}
            >
              Buy Now — {flavor.name}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-white/10 text-center">
          {flavor.stats.map(({ val, label }) => (
            <div key={label} className="px-8">
              <p
                className="font-syne text-4xl font-black md:text-5xl"
                style={{ color: flavor.accent }}
              >
                {val}
              </p>
              <p className="font-inter mt-1 text-sm uppercase tracking-widest text-white/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p
            className="font-syne mb-4 text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: flavor.accent }}
          >
            Why You'll Love It
          </p>
          <h2 className="font-syne mb-16 text-5xl font-black uppercase text-white md:text-6xl">
            Key Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {flavor.benefits.map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
              >
                <div className="mb-4 text-4xl">{icon}</div>
                <p
                  className="font-syne mb-2 text-sm font-bold uppercase tracking-widest"
                  style={{ color: flavor.accent }}
                >
                  {title}
                </p>
                <p className="font-inter text-sm leading-relaxed text-white/50">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="border-t border-white/5 px-6 py-24 md:px-16">
        <div className="mx-auto max-w-6xl">
          <p
            className="font-syne mb-4 text-xs font-bold uppercase tracking-[0.4em]"
            style={{ color: flavor.accent }}
          >
            What's Inside
          </p>
          <h2 className="font-syne mb-12 text-5xl font-black uppercase text-white md:text-6xl">
            Ingredients
          </h2>
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {flavor.ingredients.map((item) => (
              <li
                key={item}
                className="font-inter flex items-center gap-3 text-sm text-white/60"
              >
                <span
                  className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                  style={{ background: flavor.accent }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-syne text-2xl font-black uppercase tracking-widest text-white">
            Volt<span style={{ color: flavor.accent }}>.</span>
          </p>
          <p className="font-inter text-xs text-white/20">
            © 2026 Volt Energy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
