import React, { useState, useEffect } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Chapter14: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    if (!isRunning) return;
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, [isRunning]);

  useEffect(() => {
    if (!isTimerRunning) return;
    const i = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(i);
  }, [isTimerRunning]);

  useEffect(() => {
    const resize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  useEffect(() => {
    document.title = `Timer: ${timer}s | React Learning`;
    return () => { document.title = 'React Learning Playground'; };
  }, [timer]);

  return (
    <ChapterLayout chapterNumber={14} title="React Hooks (useEffect)" description="Master the useEffect hook with timers, event listeners, and side effects">
      <div>
        <div>
          <b>Clock:</b> {time.toLocaleTimeString()} <button onClick={() => setIsRunning(r => !r)}>{isRunning ? 'Pause' : 'Start'}</button>
        </div>
        <div>
          <b>Timer:</b> {timer}s <button onClick={() => setIsTimerRunning(r => !r)}>{isTimerRunning ? 'Stop' : 'Start'}</button>
          <button onClick={() => { setTimer(0); setIsTimerRunning(false); }}>Reset</button>
        </div>
        <div>
          <b>Window:</b> {size.w}x{size.h}
        </div>
        <div>
          <b>Mouse:</b> {mouse.x}, {mouse.y}
        </div>
        <div>
          <b>Network:</b> {online ? 'Online' : 'Offline'}
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter14;