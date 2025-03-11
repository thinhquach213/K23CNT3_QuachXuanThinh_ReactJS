import React from 'react';
import QxtUseState from './components/QxtUseState';
import QxtUseStateListObject from './components/QxtUseStateListObject';
import QxtUseEffect1 from './components/QxtUseEffect1';

export default function QxtApp() {
  return (
    <div className='container border mt-3'>
      <h1>React Hook</h1>
      <QxtUseState />
      <hr />
      <QxtUseStateListObject />
      <hr />
      <QxtUseEffect1 />
    </div>
  );
}