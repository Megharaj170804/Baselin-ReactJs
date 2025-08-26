import React, { useRef, useState, useEffect } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Chapter17: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [inputValue, setInputValue] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderCount, setRenderCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <ChapterLayout chapterNumber={17} title="React Hooks (useRef)" description="Master useRef for DOM access, persistent values, and mutable references">
      <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Type..." />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
      <button onClick={() => { if (inputRef.current) { inputRef.current.value = ''; inputRef.current.focus(); } setInputValue(''); }}>Clear</button>
      <canvas ref={canvasRef} width={200} height={100} style={{ border: '1px solid #ccc' }} />
      <button onClick={() => {
        const c = canvasRef.current;
        if (c) {
          const ctx = c.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.fillStyle = 'orange';
            ctx.beginPath();
            ctx.arc(100, 50, 30, 0, 2 * Math.PI);
            ctx.fill();
          }
        }
      }}>Draw</button>
      <div>
        <button onClick={() => { countRef.current++; setDisplayCount(countRef.current); }}>+1</button>
        <button onClick={() => { countRef.current = 0; setDisplayCount(0); }}>Reset</button>
        <span>Persistent Count: {displayCount}</span>
      </div>
      <div>
        <button onClick={() => {
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => { countRef.current++; setDisplayCount(countRef.current); }, 1000);
          }
        }}>Start Timer</button>
        <button onClick={() => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } }}>Stop</button>
        <button onClick={() => { if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; } countRef.current = 0; setDisplayCount(0); }}>Reset</button>
        <span>{displayCount}s</span>
      </div>
      <button onClick={() => scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Scroll to Target</button>
      <div style={{ height: 100 }} />
      <div ref={scrollRef} style={{ background: '#eee', padding: 20, margin: 10 }}>Target Element</div>
      <button onClick={() => setRenderCount(r => r + 1)}>Force Re-render</button>
      <div>Render Count: {renderCount}</div>
    </ChapterLayout>
  );
};

export default Chapter17;