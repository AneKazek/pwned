"use client"
import { useEffect, useRef } from 'react'
import MatrixRain from '@/components/hacker/matrix-rain';
import Skull from '@/components/hacker/skull';

export default function Home() {
  const mainMessage = 'Hacked By Muhammad Dzaky Haidar';
  const secondaryMessage = "You've been owned!";
  const pocMessage = 'For PoC purposes';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = async () => {
      try {
        await audio.play()
      } catch {
        const handler = async () => {
          try {
            await audio.play()
          } finally {
            document.removeEventListener('click', handler)
            document.removeEventListener('touchstart', handler)
            document.removeEventListener('keydown', handler)
          }
        }
        document.addEventListener('click', handler)
        document.addEventListener('touchstart', handler)
        document.addEventListener('keydown', handler)
      }
    }
    tryPlay()
  }, [])

  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden">
      <MatrixRain />
      <main className="relative z-10 flex flex-col items-center justify-center p-4">
        <div className="mb-8 animate-pulse">
          <Skull className="w-32 h-32 md:w-48 md:h-48" />
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-accent glitch"
          data-text={mainMessage}
        >
          {mainMessage}
        </h1>
        <p
          className="mt-4 text-xl md:text-2xl text-electric-green glitch"
          data-text={secondaryMessage}
        >
          {secondaryMessage}
        </p>
        <p
          className="mt-2 text-lg md:text-xl text-yellow-400 glitch"
          data-text={pocMessage}
        >
          {pocMessage}
        </p>
      </main>
      <audio ref={audioRef} autoPlay loop preload="auto">
        <source src={`${basePath}/ost.mp3`} type="audio/mpeg" />
        Browser Anda tidak mendukung elemen audio.
      </audio>
    </div>
  );
}
