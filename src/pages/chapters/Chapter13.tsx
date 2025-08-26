import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Chapter13: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState(10);

  return (
    <ChapterLayout
      chapterNumber={13}
      title="React Hooks (useState)"
      description="Simple interactive counter using useState"
    >
      <div style={{ textAlign: 'center', margin: 20 }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(c => c - step)}>-{step}</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(c => c + step)}>+{step}</button>
        <button onClick={() => setCount(target)}>Set to {target}</button>
        <div style={{ margin: '10px 0' }}>
          Step: <input type="range" min={1} max={10} value={step} onChange={e => setStep(Number(e.target.value))} />
          <span>{step}</span>
        </div>
        <div>
          Target: <input type="number" value={target} onChange={e => setTarget(Number(e.target.value))} />
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter13;