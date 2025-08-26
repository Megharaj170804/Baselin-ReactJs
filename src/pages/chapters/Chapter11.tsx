import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

type Item = { id: string; name: string; emoji: string; children?: Item[] };

const initialData: Item[] = [
  { id: '1', name: 'Fruits', emoji: '🍎', children: [
    { id: '1-1', name: 'Citrus', emoji: '🍊', children: [
      { id: '1-1-1', name: 'Orange', emoji: '🍊' },
      { id: '1-1-2', name: 'Lemon', emoji: '🍋' }
    ]},
    { id: '1-2', name: 'Berries', emoji: '🍓' }
  ]},
  { id: '2', name: 'Vegetables', emoji: '🥕', children: [
    { id: '2-1', name: 'Root', emoji: '🥕' }
  ]}
];

const emojiOptions = ['🆕', '🍎', '🍊', '🍋', '🍓', '🥕', '🥦', '🍇', '🍉'];

const NestedList: React.FC<{ items: Item[] }> = ({ items }) => (
  <ul style={{ marginLeft: 20 }}>
    {items.map(item => (
      <li key={item.id}>
        {item.emoji} {item.name}
        {item.children && <NestedList items={item.children} />}
      </li>
    ))}
  </ul>
);

const Chapter11: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [name, setName] = useState('');
  const [parent, setParent] = useState('1');
  const [emoji, setEmoji] = useState('🆕');

  const addItem = () => {
    if (!name.trim()) return;
    const newItem: Item = { id: Date.now() + '', name, emoji };
    const addToParent = (items: Item[]): Item[] =>
      items.map(i =>
        i.id === parent
          ? { ...i, children: [...(i.children || []), newItem] }
          : { ...i, children: i.children ? addToParent(i.children) : undefined }
      );
    setData(addToParent(data));
    setName('');
  };

  return (
    <ChapterLayout chapterNumber={11} title="Lists, Nested Lists" description="Recursive nested list demo">
      <div>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="New item" />
        <select value={emoji} onChange={e => setEmoji(e.target.value)}>
          {emojiOptions.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
        <select value={parent} onChange={e => setParent(e.target.value)}>
          {data.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
        </select>
        <button onClick={addItem}>Add</button>
        <NestedList items={data} />
      </div>
    </ChapterLayout>
  );
};

export default Chapter11;