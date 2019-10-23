import React, { useState } from 'react';
import { connect } from 'react-redux'
import { setPosts } from './redux/posts/posts.actions'
import { setComments } from './redux/comments/comments.actions'
import Header from './Components/Header/Header'
import Login from './Components/Login'
import CardList from './Components/CardList/CardList';
import Loading from './Components/Loading/Loading';
import postsServices from './services/posts.services';
import commentsServices from './services/comments.services';

function App({ setCurrentPosts, setCurrentComments}) {
  const [ user, setUser ] = useState(0)
  const [ loading, setLoading ] = useState(true)

  const loginHandler = async e => {
    e.preventDefault()
    setUser(1)

    const posts = await postsServices.getPosts()
    const comments = await commentsServices.getComments()

    setCurrentPosts(posts)
    setCurrentComments(comments)
    setLoading(false)
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
  setCurrentPosts: posts => dispatch(setPosts(posts)),
  setCurrentComments: comments => dispatch(setComments(comments))
})

export default connect(null, mapDispatchToProps)(App)
