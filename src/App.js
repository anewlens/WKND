import React from 'react';
import Header from './Display/Header'
import Card from './Display/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Card day='FRI' />
      <Card day='SAT' />
      <Card day='SUN' />
      <div className='spacing'>
        
      </div>
    </div>
  );
}

export default App;
