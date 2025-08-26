import React, { Component } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

class ConstructorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Component initialized!',
      clickCount: 0,
      logs: ['Constructor called']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState(s => ({ logs: [...s.logs, 'Mounted'] }));
  }

  handleClick() {
    this.setState(s => ({
      clickCount: s.clickCount + 1,
      logs: [...s.logs, `Clicked (${s.clickCount + 1})`]
    }));
  }

  render() {
    const { message, clickCount, logs } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click ({clickCount})</button>
        <input value={message} onChange={e => this.setState({ message: e.target.value })} />
        <div>Message: {message}</div>
        <ul>{logs.map((log, i) => <li key={i}>{log}</li>)}</ul>
      </div>
    );
  }
}

const Chapter5: React.FC = () => (
  <ChapterLayout
    chapterNumber={5}
    title="React Component API (Constructor)"
    description="Understanding the constructor method in class components and its use cases"
  >
    <ConstructorDemo />
  </ChapterLayout>
);

export default Chapter5;