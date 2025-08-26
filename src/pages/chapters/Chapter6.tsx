import React, { useState, useEffect } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const LifecycleDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setLogs(l => [...l, 'Mounted']);
    return () => setLogs(l => [...l, 'Unmounted']);
  }, []);

  useEffect(() => {
    if (count > 0) setLogs(l => [...l, `Count: ${count}`]);
  }, [count]);

  if (!visible) return <div>Component Unmounted</div>;

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Inc ({count})</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setVisible(false)}>Unmount</button>
      <div>
        <b>Logs:</b>
        <ul>
          {logs.map((log, i) => <li key={i}>{log}</li>)}
        </ul>
        <button onClick={() => setLogs([])}>Clear Logs</button>
      </div>
    </div>
  );
};

const Chapter6: React.FC = () => {
  const [showDemo, setShowDemo] = useState(true);
  const [remountKey, setRemountKey] = useState(0);

  return (
    <ChapterLayout chapterNumber={6} title="Component Lifecycle" description="Understanding component lifecycle with useEffect hook for mounting and unmounting">
      <button onClick={() => setShowDemo(s => !s)}>{showDemo ? 'Unmount' : 'Mount'}</button>
      <button onClick={() => setRemountKey(k => k + 1)}>Remount</button>
      {showDemo && <LifecycleDemo key={remountKey} />}
    </ChapterLayout>
  );
};

export default Chapter6;