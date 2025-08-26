import React, { useState } from 'react';
import ChapterLayout from '../../components/ChapterLayout';

const mvcSteps = [
  'User interacts with View',
  'View sends input to Controller',
  'Controller updates Model',
  'Model notifies View of changes',
  'View re-renders with new data'
];
const fluxSteps = [
  'User triggers Action',
  'Action dispatched to Dispatcher',
  'Dispatcher sends to all Stores',
  'Store updates and emits change',
  'View re-renders from Store data'
];

const Chapter18: React.FC = () => {
  const [pattern, setPattern] = useState<'mvc' | 'flux'>('mvc');
  const [step, setStep] = useState(0);
  const steps = pattern === 'mvc' ? mvcSteps : fluxSteps;

  return (
    <ChapterLayout chapterNumber={18} title="Flux vs MVC" description="Difference between MVC and Flux patterns">
      <div>
        <button onClick={() => setPattern('mvc')} style={{ fontWeight: pattern === 'mvc' ? 'bold' : 'normal' }}>MVC</button>
        <button onClick={() => setPattern('flux')} style={{ fontWeight: pattern === 'flux' ? 'bold' : 'normal' }}>Flux</button>
        <button onClick={() => setStep((step + 1) % steps.length)}>Next Step</button>
        <div style={{ margin: '16px 0', fontWeight: 'bold' }}>Current Step: {steps[step]}</div>
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>MVC</th>
              <th>Flux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Flow</td>
              <td>Bidirectional</td>
              <td>Unidirectional</td>
            </tr>
            <tr>
              <td>Predictability</td>
              <td>Less predictable</td>
              <td>Highly predictable</td>
            </tr>
            <tr>
              <td>Debugging</td>
              <td>Harder</td>
              <td>Easier</td>
            </tr>
            <tr>
              <td>Complexity</td>
              <td>Simple for small apps</td>
              <td>Scales better</td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>Controllers hard to test</td>
              <td>Easy with pure functions</td>
            </tr>
            <tr>
              <td>React Fit</td>
              <td>Not ideal</td>
              <td>Perfect fit</td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: 16 }}>
          <b>Modern React Patterns:</b>
          <ul>
            <li>Redux, useReducer, Zustand, React Query, Recoil</li>
            <li>Predictable state, easy testing, clear data flow</li>
          </ul>
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter18;