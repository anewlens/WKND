import React, { useState } from 'react';
import { connect } from 'react-redux'
import { setPosts } from './redux/posts/posts.actions'
import Header from './Components/Header/Header'
import Login from './Components/Login'
import CardList from './Components/CardList/CardList';
import Loading from './Components/Loading/Loading';

function App({setCurrentPosts}) {
  const [ user, setUser ] = useState(0)
  const [ loading, setLoading ] = useState(true)

  const loginHandler = e => {
    e.preventDefault()
    setUser(1)
    fetch('/posts')
      .then(res => res.json())
      .then(res => {
        setCurrentPosts(res)
        setLoading(false)
      })
  }

  if (!user) {
    return <Login loginHandler={loginHandler} />
  } else if (!loading) {
    return (
      <div className="App">
        <Header />
        <CardList />
      </div>
    )
  } else {
    return <Loading />
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentPosts: posts => dispatch(setPosts(posts))
})

export default connect(null, mapDispatchToProps)(App)
