import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

interface Item {
  id: string;
  name: string;
  category: string;
  emoji: string;
}

const categories = ['Fruits', 'Vegetables', 'Grains', 'Dairy', 'Proteins'];
const emojis = {
  Fruits: ['🍎', '🍌', '🍊'],
  Vegetables: ['🥕', '🥦', '🍅'],
  Grains: ['🍞', '🥖', '🍚'],
  Dairy: ['🥛', '🧀'],
  Proteins: ['🥚', '🍗']
};

const Chapter10: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: '1', name: 'Apple', category: 'Fruits', emoji: '🍎' },
    { id: '2', name: 'Banana', category: 'Fruits', emoji: '🍌' },
    { id: '3', name: 'Carrot', category: 'Vegetables', emoji: '🥕' }
  ]);
  const [newItem, setNewItem] = useState({ name: '', category: 'Fruits', emoji: '🍎' });
  const [editId, setEditId] = useState<string | null>(null);
  const [editItem, setEditItem] = useState<Item | null>(null);

  const addItem = () => {
    if (!newItem.name.trim()) return;
    setItems([...items, { ...newItem, id: Date.now() + '' }]);
    setNewItem({ name: '', category: 'Fruits', emoji: '🍎' });
  };

  const deleteItem = (id: string) => setItems(items.filter(i => i.id !== id));
  const startEdit = (item: Item) => { setEditId(item.id); setEditItem({ ...item }); };
  const saveEdit = () => {
    if (editItem) setItems(items.map(i => i.id === editId ? editItem : i));
    setEditId(null); setEditItem(null);
  };

  const grouped = items.reduce((g, i) => {
    g[i.category] = g[i.category] || [];
    g[i.category].push(i);
    return g;
  }, {} as Record<string, Item[]>);

  return (
    <ChapterLayout chapterNumber={10} title="Lists, Keys and Fragments" description="Rendering lists with keys and fragments">
      <div>
        <input value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} placeholder="Name" />
        <select value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value, emoji: emojis[e.target.value][0] })}>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={newItem.emoji} onChange={e => setNewItem({ ...newItem, emoji: e.target.value })}>
          {emojis[newItem.category].map(e => <option key={e}>{e}</option>)}
        </select>
        <button onClick={addItem}>Add</button>
        {Object.entries(grouped).map(([cat, arr]) => (
          <React.Fragment key={cat}>
            <h4>{cat}</h4>
            <ul>
              {arr.map(item => (
                <li key={item.id}>
                  {editId === item.id ? (
                    <>
                      <input value={editItem?.name || ''} onChange={e => setEditItem(editItem ? { ...editItem, name: e.target.value } : null)} />
                      <select value={editItem?.emoji || ''} onChange={e => setEditItem(editItem ? { ...editItem, emoji: e.target.value } : null)}>
                        {emojis[item.category].map(e => <option key={e}>{e}</option>)}
                      </select>
                      <button onClick={saveEdit}>Save</button>
                      <button onClick={() => { setEditId(null); setEditItem(null); }}>Cancel</button>
                    </>
                  ) : (
                    <>
                      {item.emoji} {item.name}
                      <button onClick={() => startEdit(item)}>Edit</button>
                      <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}
      </div>
    </ChapterLayout>
  );
};

export default Chapter10;