import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { setPosts } from './redux/posts/posts.actions'
import Header from './Components/Header/Header'
import Login from './Components/Login'
import posts from './data/posts'
import CardList from './Components/CardList/CardList';
import './styles/keyframes.scss'

function App({setCurrentPosts}) {
  const [ user, setUser ] = useState(0)

  useEffect(() => {
    setCurrentPosts(posts)
  })

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
        <CardList />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentPosts: posts => dispatch(setPosts(posts))
})

export default connect(null, mapDispatchToProps)(App)
