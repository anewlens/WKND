import React, { useState } from 'react';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Login from './Components/Login'
import CardPost from './Components/Card/CardPost'
import posts from './data/posts'

function App() {
  const [ user, setUser ] = useState(0)

  const loginHandler = e => {
    e.preventDefault()
    setUser(1)
  }

  if (!user) {
    return <Login loginHandler={loginHandler} />
  } else if (user) {
      return (
        <div className="App">
          <Header />
          <Card day='FRI'>
            {
              posts.filter(x => x.day === 'FRI')
                .map(post => <CardPost post={post} />)
            }
          </Card>
          <Card day='SAT'>
          {
              posts.filter(x => x.day === 'SAT')
                .map(post => <CardPost post={post} />)
            }
          </Card>
          <Card day='SUN' />
        </div>
      )

  }
}

export default App;
