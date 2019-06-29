import React, { useState } from 'react';
import Header from './Display/Header'
import Card from './Display/Card'
import Login from './Display/Login'

function App() {
  const [ user, setUser ] = useState(0)

  const loginHandler = e => {
    e.preventDefault()
    setUser(1)
  }

  if (!user) {
    return (
        <Login
        loginHandler={loginHandler} />
    )
  } else if (user) {
      return (
        <div className="App">
          <Header />
          <Card day='FRI' />
          <Card day='SAT' />
          <Card day='SUN' />
        </div>
      )

  }
}

export default App;
