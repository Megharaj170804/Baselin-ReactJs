import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';
import { User, Lock, LogIn, LogOut, Settings, Bell } from 'lucide-react';

const Chapter9: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'admin' | 'user' | 'guest'>('guest');
  const [showNotifications, setShowNotifications] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const currentUser = { name: 'John Doe', email: 'john@example.com', avatar: '👤', role: userType };
  const notifications = ['Welcome back!', 'You have 3 new messages', 'Your profile is 80% complete'];

  const toggleLogin = () => {
    setIsLoggedIn(l => !l);
    setUserType(isLoggedIn ? 'guest' : 'user');
  };

  return (
    <ChapterLayout chapterNumber={9} title="React Conditional Rendering" description="Toggle between different UI states based on conditions like login status">
      <div>
        <button onClick={toggleLogin}>{isLoggedIn ? <LogOut /> : <LogIn />} {isLoggedIn ? 'Logout' : 'Login'}</button>
        <select value={userType} onChange={e => setUserType(e.target.value as any)} disabled={!isLoggedIn}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={() => setShowNotifications(n => !n)}>{showNotifications ? 'Hide' : 'Show'} Notifications</button>
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>{theme === 'light' ? '🌙' : '☀️'} Theme</button>
        <div style={{ margin: 20, padding: 20, background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#222' : '#fff' }}>
          <div>Status: <b>{isLoggedIn ? 'Online' : 'Offline'}</b></div>
          {isLoggedIn ? (
            <>
              <div>Welcome, {currentUser.avatar} {currentUser.name} ({currentUser.email})</div>
              {showNotifications && <ul>{notifications.map((n, i) => <li key={i}>{n}</li>)}</ul>}
              {userType === 'admin' && <div><Settings /> Admin Panel</div>}
              {userType === 'user' && <div><User /> User Dashboard</div>}
            </>
          ) : (
            <>
              <div><Lock /> Please Log In</div>
              <button onClick={toggleLogin}><LogIn /> Login to Continue</button>
              <div>Public Information: This content is visible to everyone.</div>
            </>
          )}
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter9;