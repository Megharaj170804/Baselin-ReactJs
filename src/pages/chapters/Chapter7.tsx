import React, { useState, useRef } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Chapter7: React.FC = () => {
  // Controlled
  const [cName, setCName] = useState('');
  const [cEmail, setCEmail] = useState('');
  const [cMsg, setCMsg] = useState('');
  // Uncontrolled
  const uName = useRef<HTMLInputElement>(null);
  const uEmail = useRef<HTMLInputElement>(null);
  const uMsg = useRef<HTMLTextAreaElement>(null);
  const [subs, setSubs] = useState<any[]>([]);

  const handleControlled = (e: React.FormEvent) => {
    e.preventDefault();
    setSubs(s => [...s, { type: 'Controlled', name: cName, email: cEmail, msg: cMsg }]);
    setCName(''); setCEmail(''); setCMsg('');
  };

  const handleUncontrolled = (e: React.FormEvent) => {
    e.preventDefault();
    setSubs(s => [...s, { type: 'Uncontrolled', name: uName.current?.value, email: uEmail.current?.value, msg: uMsg.current?.value }]);
    if (uName.current) uName.current.value = '';
    if (uEmail.current) uEmail.current.value = '';
    if (uMsg.current) uMsg.current.value = '';
  };

  return (
    <ChapterLayout chapterNumber={7} title="React Forms (Controlled + Uncontrolled)" description="Controlled vs uncontrolled form inputs">
      <div style={{ display: 'flex', gap: 30 }}>
        <form onSubmit={handleControlled}>
          <h3>Controlled</h3>
          <input value={cName} onChange={e => setCName(e.target.value)} placeholder="Name" /><br />
          <input value={cEmail} onChange={e => setCEmail(e.target.value)} placeholder="Email" /><br />
          <textarea value={cMsg} onChange={e => setCMsg(e.target.value)} placeholder="Message" /><br />
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={handleUncontrolled}>
          <h3>Uncontrolled</h3>
          <input ref={uName} placeholder="Name" /><br />
          <input ref={uEmail} placeholder="Email" /><br />
          <textarea ref={uMsg} placeholder="Message" /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h4>Submissions</h4>
        <ul>
          {subs.map((s, i) => (
            <li key={i}>
              <b>{s.type}</b>: {s.name} | {s.email} | {s.msg}
            </li>
          ))}
        </ul>
        {subs.length > 0 && <button onClick={() => setSubs([])}>Clear</button>}
      </div>
    </ChapterLayout>
  );
};

export default Chapter7;