import React, { createContext, useContext, useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const ThemeContext = createContext<any>(null);
const UserContext = createContext<any>(null);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{ theme, primaryColor, toggleTheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState({ name: 'John', preferences: { notifications: true, language: 'English' } });
  const updateUser = (u: any) => setUser((prev: any) => ({ ...prev, ...u, preferences: { ...prev.preferences, ...u.preferences } }));
  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
const useUser = () => useContext(UserContext);

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();
  return (
    <div>
      <b>Welcome, {user.name}!</b> Theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

const SettingsPanel = () => {
  const { theme, primaryColor, setPrimaryColor } = useTheme();
  const { user, updateUser } = useUser();
  return (
    <div>
      <div>
        Color:
        {['#3B82F6', '#10B981', '#8B5CF6'].map(c => (
          <button key={c} style={{ background: c, width: 24, height: 24, margin: 2 }} onClick={() => setPrimaryColor(c)} />
        ))}
      </div>
      <input value={user.name} onChange={e => updateUser({ name: e.target.value })} />
      <select value={user.preferences.language} onChange={e => updateUser({ preferences: { language: e.target.value } })}>
        {['English', 'Spanish'].map(l => <option key={l}>{l}</option>)}
      </select>
      <label>
        Notifications
        <input type="checkbox" checked={user.preferences.notifications} onChange={e => updateUser({ preferences: { notifications: e.target.checked } })} />
      </label>
    </div>
  );
};

const ContentArea = () => {
  const { theme, primaryColor } = useTheme();
  const { user } = useUser();
  return (
    <div>
      <div>Theme: {theme}, Color: {primaryColor}</div>
      <div>Name: {user.name}, Lang: {user.preferences.language}, Notif: {user.preferences.notifications ? 'On' : 'Off'}</div>
      <div style={{ background: primaryColor, color: '#fff', padding: 10 }}>Primary Color Sample</div>
    </div>
  );
};

const ContextDemo = () => (
  <ThemeProvider>
    <UserProvider>
      <Header />
      <SettingsPanel />
      <ContentArea />
    </UserProvider>
  </ThemeProvider>
);

const Chapter15: React.FC = () => (
  <ChapterLayout chapterNumber={15} title="React Hooks (useContext)" description="Share state across components without prop drilling">
    <ContextDemo />
  </ChapterLayout>
);

export default Chapter15;