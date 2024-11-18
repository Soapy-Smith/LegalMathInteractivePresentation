import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const TimeValueAnimations = () => {
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setTime(t => (t + 1) % 100);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const presentValue = 100000;
  const rate = 0.05;
  const currentValue = presentValue * Math.pow(1 + rate, time/20);

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Time Value of Money Animation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 relative">
            <motion.div 
              className="absolute left-0 bottom-0 w-16 bg-blue-500"
              animate={{ height: `${(currentValue/presentValue) * 200}px` }}
              transition={{ duration: 0.1 }}
            />
            <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-300" />
            <div className="absolute left-20 bottom-0 flex flex-col">
              <span className="text-lg font-bold">
                ${Math.round(currentValue).toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">
                Year {Math.floor(time/20)}
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeValueAnimations;
