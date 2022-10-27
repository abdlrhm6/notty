import { createContext, useState } from 'react'
import './App.scss'
import Space from './components/Space'
import Home from './components/Home'
import Register from './components/Register'
export const noteContext = createContext()
import {Routes,Route, Navigate} from 'react-router-dom'
import Statistics from './components/Statistics'
import Profile from "./components/Profile"
import Singlenote from './components/Singlenote'
function App() {

  const [note, setNote] = useState({
    noteItems: null,
    chosen: null,
    addM: false,
    deleteM: false,
    editM: false,
    currentU :  null,
    loaded : false

})

  return (


    <div className="App">

      <div className="dashboard">


        <noteContext.Provider value={{ note, setNote }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/space' element  = {note.currentU ? <Space/> : <Navigate to ="/"/>}/>
            <Route path='/newuser' element  = {<Register/>} />
            <Route path='/statistics' element  = {note.currentU ? <Statistics/> : <Navigate to ="/"/>} />
            <Route path='/profile' element  = {note.currentU ? <Profile/> : <Navigate to ="/"/>} />
            <Route path='/notes/:id' element  = {note.currentU ? <Singlenote/> : <Navigate to ="/"/>} />
          </Routes>
          
        </noteContext.Provider>
      </div>

    </div>


  )
}

export default App
