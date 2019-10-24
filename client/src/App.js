import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'
import CardList from './Components/CardList/CardList';
import Loading from './Components/Loading/Loading';
import { setUser } from './redux/user/user.actions';
import { setPosts } from './redux/posts/posts.actions';
import { setComments } from './redux/comments/comments.actions';
import { toggleLoading } from './redux/loading/loading.actions';
import getAll from './services/data.services';
import Signup from './Components/Signup/Signup';

function App({setUser, setComments, setPosts, toggleLoading}) {
  const user = useSelector(state => state.user)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    const localUser = JSON.parse(window.localStorage.getItem('localUser'))
  
    if (localUser) {
      setUser(localUser)

      getAll(localUser)
        .then(({posts, comments}) => {    
          setPosts(posts)
          setComments(comments)
          toggleLoading()
        })
    }
  }, [setUser, setPosts, setComments, toggleLoading])

  if (!user) {
    // return <Login />
    return <Signup />
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
  setUser: user => dispatch(setUser(user)),
  setPosts: posts => dispatch(setPosts(posts)),
  setComments: comments => dispatch(setComments(comments)),
  toggleLoading: () => dispatch(toggleLoading())
})

export default connect(null, mapDispatchToProps)(App)
