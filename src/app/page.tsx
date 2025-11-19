import MatrixRain from '@/components/hacker/matrix-rain';
import Skull from '@/components/hacker/skull';

export default function Home() {
  const mainMessage = 'Hacked By Muhammad Dzaky Haidar';
  const secondaryMessage = "You've been owned!";

  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center text-center overflow-hidden">
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
      </main>
    </div>
  );
}
