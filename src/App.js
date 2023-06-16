import React from 'react';

import StateCode from './components/useState';

import StateClass from './components/class_useState';
function App() {
  return (
    <div>
        <h1>UP</h1>
        <StateCode></StateCode>
        <h1>State Class</h1>
        <StateClass></StateClass>
    </div>
  );
}

export default App;
