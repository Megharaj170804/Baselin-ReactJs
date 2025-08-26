import React, { useState, Component } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const FunctionalComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Functional</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

class ClassComponent extends Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <h3>Class</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
      </div>
    );
  }
}

const Chapter2: React.FC = () => (
  <ChapterLayout chapterNumber={2} title="React Components (Functional + Class)" description="Functional and Class Components">
    <div style={{ display: 'flex', gap: 30 }}>
      <FunctionalComponent />
      <ClassComponent />
    </div>
  </ChapterLayout>
);

export default Chapter2;