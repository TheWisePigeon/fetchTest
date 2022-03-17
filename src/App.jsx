import React from 'react'
import './App.css'
import Avatar from './components/Avatar'
import avatars from './avatar'

function App() {

  function createAvatars(avatar) {
    return(
      <Avatar src={avatar.src} name={avatar.name}/>
    )
  }

  return (
    <div className="App">
      {
        avatars.map(
          x=> createAvatars(x)
        )
      }
    </div>
      
  )
}

export default App
