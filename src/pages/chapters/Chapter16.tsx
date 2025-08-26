import React, { useReducer, useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

type CounterAction = 
  | { type: 'INC' }
  | { type: 'DEC' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number };

const counterReducer = (s: number, a: CounterAction) => {
  switch (a.type) {
    case 'INC': return s + 1;
    case 'DEC': return s - 1;
    case 'RESET': return 0;
    case 'SET': return a.payload;
    default: return s;
  }
};

type Todo = { id: string; text: string; done: boolean };
type TodoAction =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: string }
  | { type: 'DEL'; id: string };

const todoReducer = (todos: Todo[], a: TodoAction) => {
  switch (a.type) {
    case 'ADD': return [...todos, { id: Date.now() + '', text: a.text, done: false }];
    case 'TOGGLE': return todos.map(t => t.id === a.id ? { ...t, done: !t.done } : t);
    case 'DEL': return todos.filter(t => t.id !== a.id);
    default: return todos;
  }
};

const Chapter16: React.FC = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const [todos, todoDispatch] = useReducer(todoReducer, [
    { id: '1', text: 'Learn useReducer', done: false }
  ]);
  const [val, setVal] = useState('');

  return (
    <ChapterLayout chapterNumber={16} title="useReducer Short Demo" description="Simple counter and todo with useReducer">
      <div>
        <div>
          <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
          <span style={{ margin: '0 10px' }}>{count}</span>
          <button onClick={() => dispatch({ type: 'INC' })}>+</button>
          <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
          <input type="number" value={val} onChange={e => setVal(e.target.value)} style={{ width: 60, marginLeft: 10 }} />
          <button onClick={() => dispatch({ type: 'SET', payload: Number(val) })}>Set</button>
        </div>
        <div style={{ marginTop: 20 }}>
          <input value={val} onChange={e => setVal(e.target.value)} placeholder="Add todo" />
          <button onClick={() => { if (val) { todoDispatch({ type: 'ADD', text: val }); setVal(''); } }}>Add</button>
          <ul>
            {todos.map(t => (
              <li key={t.id}>
                <input type="checkbox" checked={t.done} onChange={() => todoDispatch({ type: 'TOGGLE', id: t.id })} />
                <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
                <button onClick={() => todoDispatch({ type: 'DEL', id: t.id })}>×</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter16;