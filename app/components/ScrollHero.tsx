'use client';

import { useEffect, useRef } from 'react';

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Fade in on mount
    video.style.opacity = '0';
    const fadeTimer = setTimeout(() => {
      video.style.transition = 'opacity 200ms ease';
      video.style.opacity = '1';
    }, 50);

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      targetTimeRef.current = progress * (video.duration || 0);
    };

    const tick = () => {
      // Lerp smoothing — factor 0.22 gives an Apple-style glide
      currentTimeRef.current +=
        (targetTimeRef.current - currentTimeRef.current) * 0.22;

      if (
        video.readyState >= 2 &&
        Math.abs(currentTimeRef.current - video.currentTime) > 0.01
      ) {
        video.currentTime = currentTimeRef.current;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* sticky sentinel — height forces the scroll range */}
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: '100vh' }}>
        {/* inner relative wrapper guarantees absolute children resolve against THIS box */}
        <div className="relative h-full w-full">
          {/* Fallback gradient (visible when hero.mp4 is absent) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 60% 40%, #0d2510 0%, #0a0a0a 60%)',
            }}
          />
          <video
            ref={videoRef}
            src="/hero.mp4"
            playsInline
            muted
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Bottom-fade to merge with content below */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0a0a0a]" />

          {/* Centred hero copy */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="font-syne text-xs font-bold uppercase tracking-[0.4em] text-neon-green">
              Scroll to explore
            </p>
            <h1 className="font-syne text-6xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-8xl lg:text-9xl">
              Pure&nbsp;Energy
              <br />
              <span className="text-neon-green">Redefined</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
