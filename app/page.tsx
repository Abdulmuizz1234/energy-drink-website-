import ScrollHero from './components/ScrollHero';
import FlavorCard from './components/FlavorCard';

const flavors = [
  {
    name: 'Coconut',
    tagline: 'Tropical Clarity',
    accent: '#39ff14',
    bg: 'linear-gradient(135deg, #0d1f0d 0%, #111811 100%)',
    emoji: '🥥',
    desc: 'A smooth, crisp rush of tropical coconut with a clean finish. Zero crash. Maximum focus.',
  },
  {
    name: 'Orange',
    tagline: 'Solar Surge',
    accent: '#ff6b00',
    bg: 'linear-gradient(135deg, #1f0e00 0%, #180d00 100%)',
    emoji: '🍊',
    desc: 'Bright Valencia orange ignites your senses with a citrus burst that powers through your day.',
  },
  {
    name: 'Lime',
    tagline: 'Icy Voltage',
    accent: '#ccff00',
    bg: 'linear-gradient(135deg, #0f1a00 0%, #0c1400 100%)',
    emoji: '🍋',
    desc: 'Ice-cold lime zest slices through fatigue. Sharp. Electric. Unstoppable.',
  },
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      {/* ── Scroll-scrub hero ── */}
      <ScrollHero />

      {/* ── Flavour showcase ── */}
      <section className="px-6 py-32 md:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-20 text-center">
            <p className="font-syne mb-4 text-xs font-bold uppercase tracking-[0.4em] text-neon-green">
              Three Flavours
            </p>
            <h2 className="font-syne text-5xl font-black uppercase leading-tight text-white md:text-7xl">
              Choose Your
              <br />
              <span className="text-white/30">Power</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {flavors.map((f) => (
              <FlavorCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-white/5 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 divide-x divide-white/10 text-center">
          {[
            { val: '0g', label: 'Sugar' },
            { val: '200mg', label: 'Caffeine' },
            { val: '3', label: 'Flavours' },
          ].map(({ val, label }) => (
            <div key={label} className="px-8">
              <p className="font-syne text-4xl font-black text-neon-green md:text-5xl">
                {val}
              </p>
              <p className="font-inter mt-1 text-sm uppercase tracking-widest text-white/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 px-6 py-16 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="font-syne text-2xl font-black uppercase tracking-widest text-white">
            Volt<span className="text-neon-green">.</span>
          </p>

          <nav className="flex gap-8">
            {['Story', 'Flavours', 'Where to Buy', 'Press'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-inter text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="font-inter text-xs text-white/20">
            © 2026 Volt Energy. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
