import React from 'react';

import StateCode from './components/useState';

import StateClass from './components/class_useState';

import Efect1 from './components/useEffect';

import Efect2 from './components/useEffect_didUpdate';

import MyComponent from './components/useMemo';

import Calluse from './components/useCallback';

function App() {
  return (
    <div>
        <h1>UP</h1>
        <StateCode></StateCode>
        <h1>State Class</h1>
        <StateClass></StateClass>
        <h1>Efect1</h1>
        <Efect1></Efect1>
        <h1>Effect 2</h1>
        <Efect2></Efect2>
        <h1>UseMemo</h1>
        <MyComponent></MyComponent>
        <h1>useCallback</h1>
        <Calluse></Calluse>
    </div>
  );
}

export default App;
