import React from 'react';
import { useSelector } from 'react-redux'
import Header from './Components/Header/Header'
import Login from './Components/Login'
import CardList from './Components/CardList/CardList';
import Loading from './Components/Loading/Loading';


function App() {
  const user = useSelector(state => state.user)
  const loading = useSelector(state => state.loading)

  if (!user) {
    return <Login />
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

export default App
