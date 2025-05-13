'use client';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';

export function HeroSection() {
  const tablet = useMediaQuery('(max-width: 1024px)');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden bg-gray-100 py-20 md:py-32"
    >
      <div className="relative flex flex-col items-center w-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Digital Business Innovator
        </h1>
        <p className="text-5xl md:text-7xl font-extrabold mb-8 text-[#990033]">
          LG CNS
        </p>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          고객의 비즈니스 성장을 위해 최고의 IT 전문가들이 미래 기술을 실현합니다.
        </p>
      </div>
    </section>
  );
}
