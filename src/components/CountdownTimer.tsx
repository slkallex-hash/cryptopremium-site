import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-black/50 border border-yellow-500/30 rounded-xl flex items-center justify-center text-2xl font-bold text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Horas</span>
      </div>
      <span className="text-2xl font-bold text-yellow-500/50 mb-6">:</span>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-black/50 border border-yellow-500/30 rounded-xl flex items-center justify-center text-2xl font-bold text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Minutos</span>
      </div>
      <span className="text-2xl font-bold text-yellow-500/50 mb-6">:</span>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-black/50 border border-yellow-500/30 rounded-xl flex items-center justify-center text-2xl font-bold text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <span className="text-xs text-zinc-500 mt-2 uppercase tracking-wider">Segundos</span>
      </div>
    </div>
  );
}
