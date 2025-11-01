import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SOSButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTriggered, setIsTriggered] = useState(false);

  const handleSOS = () => {
    setIsOpen(true);
    setIsTriggered(true);
    setTimeout(() => setIsTriggered(false), 5000);
  };

  return (
    <>
      <Button
        onClick={handleSOS}
        className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 shadow-lg z-40"
        size="icon"
      >
        <AlertCircle className="w-8 h-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">🆘 SOS Alert Demo</DialogTitle>
            <DialogDescription>
              Simulating real-time emergency response flow
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <AnimatePresence>
              {isTriggered && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-sm">✅ Alert sent to 3 emergency contacts</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <p className="text-sm">📍 Location shared: Connaught Place, Delhi</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-sm">🏥 CityCare Clinic notified (1.2 km away)</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="p-3 bg-teal-50 border border-teal-200 rounded-lg"
                  >
                    <p className="text-sm">🚗 Auto-rickshaw responder dispatched (0.8 km away)</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="p-3 bg-purple-50 border border-purple-200 rounded-lg"
                  >
                    <p className="text-sm">📞 Voice call initiated to primary contact</p>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {!isTriggered && (
              <div className="text-center py-8">
                <p className="text-gray-500">Click the SOS button to see the demo again</p>
              </div>
            )}
          </div>

          <Button onClick={() => setIsOpen(false)} className="w-full">
            Close Demo
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
