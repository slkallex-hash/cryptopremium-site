import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const notifications = [
  { name: "João S.", amount: "R$ 450,00", time: "agora mesmo" },
  { name: "Maria F.", amount: "R$ 1.200,00", time: "há 2 min" },
  { name: "Carlos T.", amount: "R$ 890,00", time: "há 5 min" },
  { name: "Ana P.", amount: "R$ 3.400,00", time: "há 12 min" },
  { name: "Lucas M.", amount: "R$ 210,00", time: "há 15 min" },
  { name: "Fernanda R.", amount: "R$ 5.600,00", time: "há 22 min" },
  { name: "Roberto C.", amount: "R$ 750,00", time: "há 28 min" },
];

export function DynamicNotification() {
  const [currentNotification, setCurrentNotification] = useState(notifications[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showInterval = setInterval(() => {
      // Pick a random notification
      const randomNotif = notifications[Math.floor(Math.random() * notifications.length)];
      setCurrentNotification(randomNotif);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 12000); // Show a new notification every 12 seconds

    return () => clearInterval(showInterval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-6 left-6 z-50 glass-gold p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-sm"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-zinc-300">
              <span className="font-bold text-white">{currentNotification.name}</span> acabou de lucrar
            </p>
            <p className="text-lg font-bold text-green-400">
              {currentNotification.amount}
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">{currentNotification.time}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
