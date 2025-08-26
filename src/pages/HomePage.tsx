import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { chapters, Chapter } from '../data/chapters';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(chapters.map(ch => ch.category)))];
  const difficulties = ['All', ...Array.from(new Set(chapters.map(ch => ch.difficulty)))];

  const filteredChapters = chapters.filter(chapter => {
    const matchesSearch = chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         chapter.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || chapter.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || chapter.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return { backgroundColor: '#d4edda', color: '#155724' };
      case 'Intermediate': return { backgroundColor: '#fff3cd', color: '#856404' };
      case 'Advanced': return { backgroundColor: '#f8d7da', color: '#721c24' };
      default: return { backgroundColor: '#f8f9fa', color: '#6c757d' };
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Fundamentals': return { backgroundColor: '#cce7ff', color: '#004085' };
      case 'Components': return { backgroundColor: '#e2d5f1', color: '#5a2d82' };
      case 'Hooks': return { backgroundColor: '#d1ecf1', color: '#0c5460' };
      case 'Advanced': return { backgroundColor: '#ffeaa7', color: '#856404' };
      case 'Ecosystem': return { backgroundColor: '#f8d7da', color: '#721c24' };
      default: return { backgroundColor: '#f8f9fa', color: '#6c757d' };
    }
  };

  return (
    <div className="container">
      <div className="home-header">
        <div style={{
          width: '64px',
          height: '64px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '16px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px'
        }}>
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="3" fill="#61DBFB"/>
              <g stroke="#61DBFB" strokeWidth="2" fill="none">
              <ellipse rx="10" ry="4.5" cx="16" cy="16" transform="rotate(60 16 16)" />
              <ellipse rx="10" ry="4.5" cx="16" cy="16" transform="rotate(120 16 16)" />
              <ellipse rx="10" ry="4.5" cx="16" cy="16" />
              </g>
            </svg>
        </div>
        <h1 className="home-title">
          Baseline React JS Course
        </h1>
        
      </div>

      <div className="card">
        <div className="grid grid-3">
          <div>
            <label className="form-label">🔍 Search chapters:</label>
            <input
              type="text"
              placeholder="Search chapters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input"
            />
          </div>
          
          <div>
            <label className="form-label">📂 Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="form-label">⭐ Difficulty:</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="form-select"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="chapters-grid">
        {filteredChapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={chapter.route}
            className="chapter-card"
          >
            <div className="flex flex-between mb-20">
              <div className="chapter-card-number">
                {chapter.id}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span 
                  style={{
                    ...getDifficultyColor(chapter.difficulty),
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontWeight: '500'
                  }}
                >
                  {chapter.difficulty}
                </span>
                <span 
                  style={{
                    ...getCategoryColor(chapter.category),
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontWeight: '500'
                  }}
                >
                  {chapter.category}
                </span>
              </div>
            </div>
            
            <h3 className="chapter-card-title">
              {chapter.title}
            </h3>
            
            <p className="chapter-card-description">
              {chapter.description}
            </p>
          </Link>
        ))}
      </div>

      {filteredChapters.length === 0 && (
        <div className="text-center" style={{ padding: '48px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>
            🔍
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: '500', color: '#2c3e50', marginBottom: '8px' }}>
            No chapters found
          </h3>
          <p style={{ color: '#666' }}>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;