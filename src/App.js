import React from 'react';

import StateCode from './components/useState';

import StateClass from './components/class_useState';

import Efect1 from './components/useEffect';

function App() {
  return (
    <div>
        <h1>UP</h1>
        <StateCode></StateCode>
        <h1>State Class</h1>
        <StateClass></StateClass>
        <h1>Efect1</h1>
        <Efect1></Efect1>
        
    </div>
  );
}

export default App;
