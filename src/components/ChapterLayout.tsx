import React from 'react';
import { Link } from 'react-router-dom';

interface ChapterLayoutProps {
  chapterNumber: number;
  title: string;
  description: string;
  children: React.ReactNode;
}

const ChapterLayout: React.FC<ChapterLayoutProps> = ({ 
  chapterNumber, 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="chapter-container">
      <div className="mb-20">
        <Link to="/" className="btn btn-secondary">
          ← Back
        </Link>
      </div>

      <div className="chapter-header">
        <div className="chapter-number">
          {chapterNumber}
        </div>
        
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="demo-section">
        {children}
      </div>
    </div>
  );
};

export default ChapterLayout;