import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Button = ({ children, onClick, disabled }: any) => (
  <button onClick={onClick} disabled={disabled}>{children}</button>
);

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
};

const LoginForm = ({ onSubmit }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(email, password); }}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

const Chapter20: React.FC = () => {
  const [results, setResults] = useState<any[]>([]);
  const [running, setRunning] = useState(false);

  const runTests = async () => {
    setRunning(true); setResults([]);
    const tests = [
      'Button renders', 'Button click', 'Button disabled', 'Counter 0', 'Counter +', 'Counter -', 'Counter reset', 'Form errors', 'Form email', 'Form submit'
    ];
    for (let t of tests) {
      await new Promise(r => setTimeout(r, 100));
      setResults(r => [...r, { name: t, status: Math.random() > 0.2 ? 'passed' : 'failed' }]);
    }
    setRunning(false);
  };

  return (
    <ChapterLayout chapterNumber={20} title="Unit Testing (Jest)" description="Learn React component testing with Jest">
      <button onClick={runTests} disabled={running}>{running ? 'Running...' : 'Run Tests'}</button>
      <div>
        {results.map((t, i) => (
          <div key={i} style={{ color: t.status === 'passed' ? 'green' : 'red' }}>{t.name}: {t.status}</div>
        ))}
      </div>
      <Counter />
      <LoginForm onSubmit={(e: string, p: string) => alert(`Login: ${e} / ${p}`)} />
    </ChapterLayout>
  );
};

export default Chapter20;