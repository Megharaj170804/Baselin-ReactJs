import React, { useState, useEffect } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const DynamicGreeting: React.FC<{ name: string; message: string; theme: string; onNameClick: () => void }> = ({ name, message, theme, onNameClick }) => (
  <div style={{ padding: 16, borderRadius: 8, background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#222' : '#fff' }}>
    <h3>
      {message},{' '}
      <button style={{ textDecoration: 'underline', color: theme === 'light' ? 'blue' : 'lightblue' }} onClick={onNameClick}>
        {name || 'Anonymous'}
      </button>! 👋
    </h3>
    <div>
      <p>Theme: {theme}</p>
      <p>Name length: {name.length}</p>
      <p>Click your name for a surprise!</p>
    </div>
  </div>
);

const Chapter4: React.FC = () => {
  const [inputName, setInputName] = useState('Megharaj');
  const [customMessage, setCustomMessage] = useState('Hello');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [clickCount, setClickCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => { setLastUpdate(new Date().toLocaleTimeString()); }, [inputName, customMessage, theme]);

  const handleNameClick = () => {
    setClickCount(c => c + 1);
    const messages = ['Great job!', 'Keep learning!', 'You\'re awesome!', 'React is fun!'];
    setCustomMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <ChapterLayout chapterNumber={4} title="React State + Props with Hooks" description="Real-time interaction between state updates and prop changes using hooks">
      <div style={{ maxWidth: 500, margin: 'auto' }}>
        <input value={inputName} onChange={e => setInputName(e.target.value)} placeholder="Name" />
        <input value={customMessage} onChange={e => setCustomMessage(e.target.value)} placeholder="Message" />
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme === 'light' ? '🌙' : '☀️'} Theme</button>
        <div style={{ margin: '10px 0' }}>Name Length: {inputName.length} | Clicks: {clickCount} | Last Update: {lastUpdate}</div>
        <DynamicGreeting name={inputName} message={customMessage} theme={theme} onNameClick={handleNameClick} />
      </div>
    </ChapterLayout>
  );
};

export default Chapter4;