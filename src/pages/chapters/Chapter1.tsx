import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const Chapter1: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <ChapterLayout
      chapterNumber={1}
      title="React.js (Hello World)"
      description="Hello World"
    >
      <div>
        <h1>Hello React! 👋</h1>
        <p>Welcome to React!</p>

        <button
          onClick={() => setClickCount(prev => prev + 1)}
          className="btn btn-primary"
        >
          Say Hello ({clickCount})
        </button>
        
        {clickCount > 0 && (
          <p>Hello! You clicked {clickCount} times!</p>
        )}

        
      </div>
    </ChapterLayout>
  );
};

export default Chapter1;