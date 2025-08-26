import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin', status: 'Active', joinDate: '2023-01-15', lastLogin: '2024-01-15', avatar: '👩‍💼' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor', status: 'Active', joinDate: '2023-02-20', lastLogin: '2024-01-14', avatar: '👨‍💻' },
  { id: 3, name: 'Carol', email: 'carol@example.com', role: 'Viewer', status: 'Inactive', joinDate: '2023-03-10', lastLogin: '2023-12-20', avatar: '👩‍🎨' }
];

const Chapter12: React.FC = () => {
  const [search, setSearch] = useState('');
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ChapterLayout
      chapterNumber={12}
      title="Map and Table"
      description="Mapping over JSON data and displaying it in tables"
    >
      <div style={{ maxWidth: 600, margin: 'auto' }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search name or email"
          style={{ marginBottom: 10, width: '100%', padding: 8 }}
        />
        <table border={1} cellPadding={8} style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.avatar} {u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <div style={{ textAlign: 'center', margin: 20 }}>No users found</div>}
      </div>
    </ChapterLayout>
  );
};

export default Chapter12;