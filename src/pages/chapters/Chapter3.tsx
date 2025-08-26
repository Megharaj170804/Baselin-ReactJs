import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Greeting: React.FC<{ name: string; age: number; color: string }> = ({ name, age, color }) => (
  <div style={{ border: `2px dashed ${color}`, padding: 12, borderRadius: 8 }}>
    <h3 style={{ color }}>Hello, {name}! 👋</h3>
    <p>You are {age} years old and your favorite color is {color}.</p>
  </div>
);

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  return (
    <div style={{ background: '#eef', padding: 16, borderRadius: 8 }}>
      <h3>Counter</h3>
      <div style={{ fontSize: 24 }}>{count}</div>
      <select value={step} onChange={e => setStep(Number(e.target.value))}>
        {[1, 5, 10].map(n => <option key={n}>{n}</option>)}
      </select>
      <button onClick={() => setCount(count - step)}>-{step}</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + step)}>+{step}</button>
    </div>
  );
};

const Chapter3: React.FC = () => {
  const [userName, setUserName] = useState('Alex');
  const [userAge, setUserAge] = useState(25);
  const [favoriteColor, setFavoriteColor] = useState('#3B82F6');

  return (
    <ChapterLayout chapterNumber={3} title="React State and Props" description="Understanding state management and prop passing in React components">
      <h2>State vs Props</h2>
      <Counter />
      <div>
        <input value={userName} onChange={e => setUserName(e.target.value)} placeholder="Name" />
        <input type="number" value={userAge} onChange={e => setUserAge(Number(e.target.value))} min="1" max="100" />
        <input type="color" value={favoriteColor} onChange={e => setFavoriteColor(e.target.value)} />
        <Greeting name={userName} age={userAge} color={favoriteColor} />
      </div>
    </ChapterLayout>
  );
};

export default Chapter3;